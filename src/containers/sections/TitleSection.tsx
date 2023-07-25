import ArrowSection, { ArrowSectionProps } from '@/components/Section/ArrowSection';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import Image from 'next/image';

import { Database } from '../../../types/supabase';
import TitleImage from '../../app/images/title_background_full.jpg';

export default async function TitleSection(props: ArrowSectionProps) {
  // const supabase = createServerComponentClient<Database>({ cookies });

  // const a = await supabase.from('teams').select('*');

  // console.log(a);

  return (
    <ArrowSection className="flex items-center justify-center relative" circle {...props}>
      <Image
        className="absolute inset-0"
        width={1920}
        height={1080}
        alt="background_image"
        // TODO: image 추가해야함.
        src={TitleImage}
        placeholder="blur"
        blurDataURL="https://kxgabkviofhmwhdfirsb.supabase.co/storage/v1/object/sign/images/glowing-campfire-lights-up-dark-winter-landscape-generated-by-ai.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2xvd2luZy1jYW1wZmlyZS1saWdodHMtdXAtZGFyay13aW50ZXItbGFuZHNjYXBlLWdlbmVyYXRlZC1ieS1haS5qcGciLCJpYXQiOjE2OTAyNzkwMjksImV4cCI6MTcyMTgxNTAyOX0.p0eMzkU83M7HH9ewY2yPxORJn289CyioQKl1mdH0kVo&t=2023-07-25T09%3A57%3A08.815Z"
      />
      <h1 className="text-9xl font-extrabold z-10 text-white">TEST_TITLE</h1>
    </ArrowSection>
  );
}
