## Software is learning to act

For most of computing history, software has waited for explicit instructions. A person clicked a button, submitted a form, ran a command, or called an API. Even recent AI assistants largely followed the same pattern: receive a prompt and return a response.

Agentic AI changes that relationship.

An AI agent can receive a goal, break it into tasks, select tools, call APIs, interpret results, update its plan, and continue working with limited human intervention. Instead of only generating an answer, it can take action.

![An illustration representing autonomous AI agents operating across connected digital systems](/assets/images/blog/agentic-era-autonomy.jpg)

This is the beginning of the **agentic era**: a shift from software that waits for commands to software that can pursue outcomes.

The opportunity is significant. Agents can help developers investigate incidents, automate repetitive operations, support customers, coordinate workflows, analyze large volumes of information, and make complex digital systems easier to use. But autonomy also introduces a new class of risk. When software can act, every mistake, compromised instruction, and excessive permission can have real consequences.

## What makes a system agentic?

A chatbot and an agent may use the same underlying language model, but their operational boundaries are different.

A conventional assistant usually produces content for a person to review. An agent may also have:

* **A goal:** the outcome it is expected to pursue.
* **A planning loop:** the ability to decide what step should happen next.
* **Tools:** APIs, databases, browsers, code execution, messaging systems, or business applications.
* **Memory:** context retained across steps or sessions.
* **Agency:** permission to take actions without requesting approval each time.
* **Feedback:** signals that help it evaluate results and adjust its approach.

These capabilities turn a model into part of a larger system. The quality of that system depends not only on the model’s intelligence, but also on the identities, permissions, tools, data, policies, and controls surrounding it.

## From request-response to goal-action

Traditional applications usually follow predefined paths. Developers specify the sequence of operations and the conditions under which each operation is allowed.

An agentic workflow is more dynamic. The developer defines the available tools and boundaries, while the agent may decide how and when to use them.

![A visual representation of an agentic workflow connecting goals, reasoning, tools, and outcomes](/assets/images/blog/agentic-era-workflow.jpeg)

Consider a support agent asked to resolve a customer’s billing problem. It might:

1. Retrieve the customer’s account.
2. Review recent transactions.
3. Search internal documentation.
4. Decide whether the issue qualifies for a refund.
5. Call a payment API.
6. Update the support ticket.
7. Notify the customer.

Each step may be reasonable in isolation. Together, however, they cross several trust boundaries. The agent handles personal data, interprets policy, accesses internal systems, and potentially moves money.

The central engineering question is therefore not simply, “Can the agent complete the task?” It is, “Can it complete the task safely, predictably, and within clearly defined authority?”

## APIs become the hands of AI agents

Models reason through language, but agents act through tools - and many of those tools are APIs.

This makes API security foundational to agentic AI. An agent with access to an API inherits the power of that API. If authorization is weak, permissions are broad, or inputs are insufficiently validated, the agent can amplify those weaknesses at machine speed.

Teams need to treat every tool call as a security-sensitive operation:

* Give each agent a distinct, verifiable identity.
* Grant the minimum permissions required for the current task.
* Use short-lived credentials instead of permanent secrets.
* Validate parameters independently of the model’s output.
* Enforce authorization at the API - not only in the prompt.
* Rate-limit sensitive operations and control resource consumption.
* Record decisions and actions in tamper-resistant audit logs.
* Require idempotency for actions that must not be repeated.

A prompt such as “never issue a refund above this amount” is guidance, not a security control. The payment service must enforce the limit even if the agent is manipulated, confused, or compromised.

## The new attack surface

Agentic systems combine familiar application risks with threats specific to AI-enabled workflows.

### Prompt injection

Untrusted content can contain instructions designed to override the agent’s intended task. A malicious message, document, web page, or tool response may tell the agent to reveal data or perform an unauthorized action.

Because agents consume external information while making decisions, the boundary between data and instructions becomes especially important.

### Excessive agency

An agent may receive more tools, permissions, time, or autonomy than its task requires. A system designed to draft an email does not automatically need permission to send it. A research agent does not necessarily need shell access or the ability to modify production data.

### Unsafe tool use

A model can select the wrong tool, construct unsafe parameters, misunderstand a response, or repeat an operation. Tool descriptions and prompts help guide behavior, but deterministic validation must sit between the model and consequential actions.

### Memory poisoning

If untrusted information is written into long-term memory, it may influence future decisions after the original interaction has ended. Memory therefore needs provenance, access controls, retention limits, and a safe way to correct or remove compromised entries.

### Cascading failures

Multi-agent systems introduce additional complexity. One agent may trust another agent’s output without verifying its origin or accuracy. A small error can propagate through a workflow and become difficult to trace.

## Security must scale with autonomy

![A security-focused visualization of the controls needed around connected AI agents](/assets/images/blog/agentic-era-security.png)

The more authority an agent receives, the stronger its controls should become. A useful approach is to design autonomy in levels:

1. **Observe:** the agent can read approved information but cannot change anything.
2. **Recommend:** the agent can propose an action for a person to review.
3. **Act with approval:** the agent prepares an action but requires confirmation before execution.
4. **Act within limits:** the agent can execute low-risk operations inside strict policy boundaries.
5. **Operate autonomously:** the agent can manage a broader workflow with continuous monitoring and reliable recovery controls.

Not every use case should reach the final level. Human approval is valuable when an action is irreversible, financially significant, legally sensitive, privacy-invasive, or difficult to recover from.

## Principles for trustworthy agents

### Build least privilege into the architecture

Permissions should be narrow, contextual, and temporary. Separate read access from write access, development from production, and routine actions from high-impact operations.

### Keep security outside the model

Do not ask the model to police itself. Enforce policy in gateways, authorization services, validators, sandboxes, and the systems that own the data or capability.

### Treat all external content as untrusted

Web pages, files, emails, API responses, and messages can carry malicious instructions. Track their origin and prevent untrusted content from silently changing system policy.

### Make actions observable

Record which identity initiated an action, what the agent requested, which tool executed it, what policy allowed it, and what result was returned. Logs should support investigation without exposing secrets or unnecessary personal data.

### Design for interruption and recovery

Teams need a reliable way to pause an agent, revoke its credentials, contain its tools, roll back recoverable changes, and escalate to a person. A kill switch is useful only if the surrounding infrastructure can enforce it.

### Test behavior, not only output

A fluent final response does not prove that the workflow was safe. Test tool selection, authorization failures, malicious inputs, partial outages, repeated calls, corrupted memory, and attempts to cross privilege boundaries.

## Autonomy needs accountability

The agentic era is not only a model upgrade. It is an architectural shift in how people delegate work to software.

The organizations that succeed will not be those that give agents the most access as quickly as possible. They will be those that connect useful autonomy to strong identity, narrow permissions, secure APIs, observable behavior, and meaningful human oversight.

We should continue building capable agents. But capability without containment becomes exposure, and autonomy without accountability becomes risk.

The defining question of the agentic era is no longer whether software can act on our behalf.

It is whether we can trust how it acts, understand why it acted, and stop it when the situation changes.