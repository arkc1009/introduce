import supabase, { TEAM_UUID } from '@lib/supabase/client';

export default async function TestPage() {
  const { data } = await supabase.from('teams').select('*').eq('uuid', TEAM_UUID);

  console.log(data);

  return <div>{data ? data[0].title : null}</div>;
}
