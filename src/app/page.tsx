import Section from '@/components/Section';
import IFrameSection from '@/containers/sections/IframeSection';
import OverviewSection from '@/containers/sections/OverviewSection';
import TitleSection from '@/containers/sections/TitleSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <TitleSection id="1" nextId="2" />

      <OverviewSection id="2" />

      <IFrameSection id="3" />

      <Section id="4" className="bg-slate-300">
        <svg>
          <text>123213</text>
        </svg>
      </Section>

      <Section id="5">5</Section>

      <Section id="6">6</Section>
    </main>
  );
}
