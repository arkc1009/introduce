import ScrollProgress from '@/components/Observer/ScrollProgress';
import StickyCard from '@/components/Observer/StickyCard';
import { nanoid } from 'nanoid';
import { twMerge } from 'tailwind-merge';

const bgColors = [
  `linear-gradient(96deg, rgba(255,32,32,1) 0%, rgba(255,148,103,1) 100%)`,
  `linear-gradient(96deg, rgba(255,68,0,1) 0%, rgba(255,178,106,1) 100%)`,
  `linear-gradient(150deg, rgba(255,209,0,1) 0%, rgba(237,255,143,1) 100%)`,
];

export default function ScrollPage() {
  return (
    <div className="w-[1200px] mx-auto flex flex-col items-center">
      {new Array(8).fill(0).map((_, i) => (
        <section
          key={nanoid()}
          className={twMerge(
            'w-full h-[100dvh] flex justify-between items-center',
            i % 2 !== 0 && 'flex-row-reverse',
          )}
        >
          <p className="w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam, quo numquam
            commodi quisquam eos reiciendis harum nesciunt ad! Incidunt veniam aliquid deserunt enim
            libero commodi molestiae mollitia odio maiores.
          </p>
          <StickyCard
            direction={i % 2 !== 0 ? 'left-right' : 'right-left'}
            background={bgColors[i % bgColors.length]}
          >
            ABCDE
          </StickyCard>
        </section>
      ))}

      <ScrollProgress />
    </div>
  );
}
