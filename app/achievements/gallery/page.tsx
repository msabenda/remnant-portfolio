import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { ProfileGallery } from '@/components/profile-gallery';
import { AchievementExperience } from '@/components/achievement-experience';

export const metadata = { title: 'Achievement Gallery' };

export default function GalleryPage() {
  return <PageShell index="ACHIEVEMENTS / GALLERY" title="Moments from the field." intro="Technical education, cybersecurity competitions, community leadership, and the people behind the work.">
    <AchievementExperience/>
    <Link className="text-link gallery-back" href="/achievements"><ArrowLeft size={15}/> Back to achievements</Link>
    <section className="achievement-block achievement-reveal full-gallery">
      <ProfileGallery/>
    </section>
  </PageShell>;
}
