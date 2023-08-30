'use client';

import Navigate from '@/components/Navigate';
import Navigator from '@/components/Navigate/Navigator';
import { useRef } from 'react';

export default function CopyPage2() {
  const testRef = useRef(null);

  return (
    <main className="relative w-full min-h-full">
      <Navigate.Container>
        <Navigate.Section title="1">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[800px]">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="2">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-100">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="3">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-200">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="4">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-300">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="5">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="6">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="7">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="8">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="9">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="10">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="11">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="12">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
        <Navigate.Section title="13">
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px] bg-red-400">
            Content
          </section>
        </Navigate.Section>
      </Navigate.Container>
      {/* <ul className="fixed left-0 top-0 w-[262px] p-7 max-h-screen flex flex-col gap-4 overflow-y-auto scrollbar-hide">
        <Navigator title="Title TEST" index={0} targetRef={testRef} />
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
        <li className="bg-white rounded-2xl w-full min-h-[100px]">Navi</li>
      </ul>

      <div className="flex flex-col gap-4 p-7 pl-[262px]">
        <div ref={testRef}>
          <section className="w-full border border-gray-700 rounded-2xl min-h-[1800px]">
            Content
          </section>
        </div>

        <div>
          <section className="w-full border border-gray-700 rounded-2xl min-h-[900px]">
            Content
          </section>
        </div>
      </div> */}
    </main>
  );
}
