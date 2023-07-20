import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Section className="bg-blue-300">1</Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
      <Section>5</Section>
      <Section>6</Section>
    </main>
  );
}
