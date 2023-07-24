import ArrowSection, { ArrowSectionProps } from '@/components/Section/ArrowSection';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// import { Database } from '@types/supabase';

export default async function TitleSection(props: ArrowSectionProps) {
  const supabase = createServerComponentClient({ cookies });

  const a = await supabase.from('teams').select('*');

  console.log(a);

  return (
    <ArrowSection className="flex items-center justify-center" circle {...props}>
      <h1 className="text-9xl font-extrabold">{}</h1>
    </ArrowSection>
  );
}
