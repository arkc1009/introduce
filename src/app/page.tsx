import Letterbox from "@/components/Letterbox";
import ScrollArrow from "@/components/ScrollArrow";
import Section from "@/components/Section";
import ArrowSection from "@/components/Section/ArrowSection";
import SecondSection from "./SecondSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ArrowSection id="1" nextId="2" className="relative">
        {/* <Letterbox topText="AAA" bottomText="BBB">
          Content
        </Letterbox> */}
      </ArrowSection>
      <SecondSection id="2" />
      <Section id="3" className="bg-indigo-300">
        3
      </Section>
      <Section id="4" className="bg-slate-300">
        4
      </Section>
      <Section id="5">5</Section>
      <Section id="6">6</Section>
    </main>
  );
}
