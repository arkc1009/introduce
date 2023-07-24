'use client';

import Section from '@/components/Section';
import ArrowSection from '@/components/Section/ArrowSection';
import SecondSection from '@/containers/sections/SecondSection';
import ThirdSection from '@/containers/sections/ThirdSection';
import { useEffect } from 'react';

import supabase from '@lib/supabase/client';

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      const res = await supabase.from('members').select('*');
      console.log(res);
    };

    fetch();
  }, []);

  const handleClickSend = async () => {
    const a = await supabase.from('members').insert({ name: '124321412' });
    console.log('send:', a);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <button type="button" onClick={handleClickSend}>
        SEND
      </button>
      <ArrowSection id="1" nextId="2" className="flex items-center justify-center" circle>
        <h1 className="text-9xl font-extrabold">PONE & HYOI</h1>
        {/* <Letterbox topText="AAA" bottomText="BBB">
          Content
        </Letterbox> */}
      </ArrowSection>

      <SecondSection id="2" />

      <ThirdSection id="3" />

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
