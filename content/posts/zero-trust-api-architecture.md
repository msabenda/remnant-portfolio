## Why APIs and Zero Trust fit together

Classic designs often implied: “If it came from our VPC or partner link, it is probably fine.” That breaks down when credentials leak, workloads are compromised, or attackers land inside the network through phishing or a misconfigured endpoint. **Zero Trust** flips the assumption: there is no trusted interior - only verified sessions, explicit policy, and continuous evidence.

HTTP APIs are the contract between users, devices, and microservices. They are the natural place to enforce that model, because every meaningful action already crosses an API boundary.

## Core ideas you can apply this week

*   **Explicit identity** for humans, devices, and services - not “10.0.0.0/8 is trusted.”
*   **Least privilege** per route and per resource (tenant, object id, role).
*   **Encrypt in transit** for client APIs and, where practical, for east–west calls.
*   **Observable decisions**: who called what, allow vs deny, with correlation IDs across services.

![API and service mesh style connectivity](/assets/images/blog/zerotrust-api-intro.webp)

## Authentication: prove who is calling

For public and partner APIs, **OAuth 2.0** and **OpenID Connect** remain the common baseline for users. For machine callers, use **client credentials**, signed JWTs, or platform workload identity (e.g., SPIFFE-style IDs) so each pod or job has its own credential - not one shared “service password” in a vault everyone reads.

Operational habits matter: short-lived access tokens, rotation of signing keys, validation of `aud` (audience) and scopes on _every_ request, and avoiding long-lived API keys in browser code. Authentication answers **who**; it should never be conflated with authorization, which answers **what they may do on this specific resource**.

## Authorization: gateway plus domain logic

An **API gateway** (or edge proxy) is the right layer for TLS termination, coarse authorization, rate limits, JWT validation, geo rules, and WAF-style filtering. It is _not_ the right sole layer for every rule - especially **broken object level authorization (BOLA)** checks, where the answer depends on business data (“Is this medical record in this patient’s care team?”).

Put fine-grained checks in the owning service or a dedicated **policy engine**, fed by a consistent attribute model: user id, tenant, resource owner, labels. Anti-patterns include trusting a `role` field from the JSON body, issuing a token that can read all tenants, or caching “user can access resource X” forever without invalidation when membership changes.

![Policy enforcement at API gateway and services](/assets/images/blog/zerotrust-api-gateway.webp)

## Transport, segmentation, and blast radius

Use **TLS** everywhere customers touch your APIs, and prefer encrypted or identity-bound channels between internal services too (mesh, mTLS, or cloud-native equivalents). Pair that with **allow lists** for service-to-service calls: service A may call payment validation, but not hit admin maintenance routes - implemented with network policies, mesh config, or explicit application checks, all tied to the same identity story.

The goal is lateral movement that **stops at the next hop** when a token or workload is stolen, instead of free rein on the flat network.

## Logging without drowning in PII

Log **security-relevant metadata**: authenticated principal, route template, tenant id, decision (allow/deny), policy version, latency, error class. Avoid full request/response bodies in central logs unless you have a clear retention and redaction program - APIs often carry PII and secrets. Feed identity providers and gateways **risk signals** (new device, impossible travel, spike in failures) to step up MFA or throttle suspicious keys.

## A pragmatic rollout order

1.  Inventory routes (OpenAPI, gateway configs, traffic captures) and remove anonymous “internal only” exceptions.
2.  Mandate TLS and authenticated callers on every external route; standardize JWT validation at the edge.
3.  Add per-resource authorization tests for your top ten sensitive object types (accounts, orders, documents).
4.  Tighten service credentials: separate identities per workload, narrow scopes, rotate keys.
5.  Layer mesh or mTLS for the highest-risk segments (payments, PII, admin) first, then expand.

## Takeaway

**Zero Trust API architecture** means every HTTP call carries a verifiable identity, hits explicit policy at enforcement points, uses strong transport, and emits enough telemetry to investigate incidents - without assuming the network is clean. It complements pentesting and WAFs: those find mistakes; Zero Trust limits how far a mistake or stolen credential can spread.

![Security architecture review](/assets/images/blog/zerotrust-api-conclusion.jpg)

## FAQ

Is Zero Trust only for large enterprises?

No. A single cluster or region still benefits from gateway JWT validation, workload-scoped credentials, and namespace-level network rules - the same pattern at smaller scale.

Does Zero Trust replace penetration testing?

No. Pentesting finds implementation bugs; Zero Trust reduces blast radius when credentials leak or a service is misconfigured.

Where should BOLA checks live?

In the service that owns the data or a shared authorization layer with access to the data model - not only at the edge, because the edge cannot evaluate every object relationship.

Quick first milestone?

TLS + authentication on 100% of routes, plus one automated test per sensitive resource pattern that must fail when IDs are swapped between tenants.
