import { PageShell } from '@/components/page-shell';
import { GalleryPreview } from '@/components/gallery-preview';
import { ProfileRecord } from '@/components/profile-record';
import { AchievementExperience } from '@/components/achievement-experience';

export const metadata = { title: 'Achievements' };

export default function Page() {
  return <PageShell index="PROFILE · ACHIEVEMENTS" title="Learning, leadership, and recognition." intro="A focused record of accomplishments, education, credentials, events, skills, and community moments.">
    <AchievementExperience/>
    <section className="achievement-block achievement-reveal">
      <div className="simple-heading"><p className="eyebrow">PROFILE RECORD</p><h2>Accomplishments, events, education, and certificates.</h2></div>
      <ProfileRecord/>
    </section>

    <section className="achievement-block achievement-reveal">
      <div className="simple-heading"><p className="eyebrow">IN THE FIELD</p><h2>Community and competition moments.</h2></div>
      <GalleryPreview/>
    </section>
  </PageShell>;
}
