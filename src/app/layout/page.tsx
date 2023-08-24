import CircleWave from '@/components/Effects/CircleWave';
import Gallery from '@/components/Layouts/Gallery';
import SortList from '@/components/Layouts/SortList';

export default function LayoutPage() {
  return (
    <div className="w-[1200px] mx-auto flex flex-col items-center gap-8 py-[100px]">
      <section className="w-full text-center">
        <h1 className="font-extrabold text-2xl mb-4">Gallery</h1>
        <Gallery />
      </section>

      <section className="w-full text-center">
        <h1 className="font-extrabold text-2xl mb-4">Sort List</h1>
        <SortList />
      </section>
    </div>
  );
}
