'use client';

import CircleWave from '@/components/Effects/CircleWave';
import { ChangeEventHandler, useCallback, useDeferredValue, useMemo, useState } from 'react';

export default function EffectsPage() {
  const [circleSize, setCircleSize] = useState<number>(16);
  const [circleColor, setCircleColor] = useState('salmon');
  const [circleWaveCountTemp, setCircleWaveCountTemp] = useState(3);
  const [circleWaveCountReal, setCircleWaveCountReal] = useState(circleWaveCountTemp);

  const deferredCircleColor = useDeferredValue(circleColor);

  const handleChangeSize: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setCircleSize(e.target.valueAsNumber);
  }, []);

  const handleChangeCircleColor: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setCircleColor(e.target.value);
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center gap-8 pt-8">
      <h1 className="text-2xl font-semibold">CircleWave</h1>
      <section className="w-full flex items-center justify-center gap-8">
        <div className="flex flex-col gap-4">
          <fieldset className="relative flex items-center gap-4">
            <label htmlFor="circleWaveSizeNumber">Size (number / px)</label>
            <input type="range" min={0} max={99} value={circleSize} onChange={handleChangeSize} />
            <p className="">{circleSize}</p>
          </fieldset>

          <fieldset className="relative flex items-center gap-4">
            <label htmlFor="circleWaveColor">Color</label>
            <input
              type="text"
              value={circleColor}
              onChange={handleChangeCircleColor}
              className="px-2 rounded-lg"
            />
          </fieldset>

          <fieldset className="relative flex items-center gap-4">
            <label htmlFor="circleWaveCount">Wave Count</label>
            <input
              type="number"
              min={0}
              max={99}
              value={circleWaveCountTemp}
              onChange={(e) => setCircleWaveCountTemp(e.target.valueAsNumber)}
              className="px-2 rounded-lg"
            />

            <button
              type="button"
              onClick={() => setCircleWaveCountReal(circleWaveCountTemp)}
              className="bg-gray-800 text-white text-sm p-2 px-4 rounded-2xl"
            >
              Apply!
            </button>
          </fieldset>
        </div>

        <div className="relative border border-slate-900 border-opacity-30 w-[200px] h-[200px] rounded-md grid place-items-center">
          <p className="absolute w-full inset-0 text-center">Count: {circleWaveCountReal}</p>
          <CircleWave
            key={circleWaveCountReal}
            size={circleSize}
            color={deferredCircleColor}
            waveCount={circleWaveCountReal}
          />
        </div>
      </section>
    </main>
  );
}
