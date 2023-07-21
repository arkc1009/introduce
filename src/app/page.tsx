"use client";

import Section from "@/components/Section";
import ArrowSection from "@/components/Section/ArrowSection";
import { useEffect } from "react";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ArrowSection
        id="1"
        nextId="2"
        className="flex items-center justify-center"
        circle
      >
        <h1 className="text-9xl font-extrabold">PONE & HYOI</h1>
        {/* <Letterbox topText="AAA" bottomText="BBB">
          Content
        </Letterbox> */}
      </ArrowSection>

      <SecondSection id="2" />

      <ThirdSection id="3" />

      <Section id="4" className="bg-slate-300">
        4
      </Section>

      <Section id="5">5</Section>

      <Section id="6">6</Section>
    </main>
  );
}
