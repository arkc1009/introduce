'use client';

import IntroduceParagraph from '@/components/Paragraph/IntroduceParagraph';
import { SectionProps } from '@/components/Section';
import ArrowSection from '@/components/Section/ArrowSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Database } from '~types/supabase';

import supabase, { TEAM_UUID } from '@lib/supabase/client';

export default function OverviewSection(props: SectionProps) {
  const [members, setMembers] = useState<Database['public']['Tables']['members']['Row'][]>();

  useEffect(() => {
    const fetchMembers = async () => {
      const { data: teamData } = await supabase.from('teams').select('*').eq('uuid', TEAM_UUID);
      const teamId = teamData?.[0].id;

      const { data, error } = await supabase.from('members').select('*').eq('team', teamId);

      if (!error) {
        setMembers(data);
      }
    };

    fetchMembers();
  }, []);

  return (
    <ArrowSection className="flex flex-col text-black text-xl h-auto" nextId="3" circle {...props}>
      <div className="grid grid-cols-2 gap-4 bg-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ x: -500 }}
          transition={{ duration: 1.5 }}
          className="h-screen flex items-center"
        ></motion.div>

        <IntroduceParagraph title="PONE" youtube="https://youtu.be/cTeNxrgBrw8" />
      </div>

      <div className="grid grid-cols-2 gap-4 bg-pink-200 bg-opacity-75">
        <IntroduceParagraph
          title="HYOI"
          className="items-end"
          youtube="https://youtu.be/cTeNxrgBrw8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-screen flex items-center"
        ></motion.div>
      </div>
    </ArrowSection>
  );
}
