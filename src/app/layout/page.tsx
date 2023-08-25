import CircleWave from '@/components/Effects/CircleWave';
import Cycle from '@/components/Layouts/Cycle';
import Gallery from '@/components/Layouts/Gallery';
import SortList from '@/components/Layouts/SortList';

export default function LayoutPage() {
  return (
    <div className="w-[1200px] mx-auto flex flex-col items-center gap-8 py-[100px]">
      <section className="w-full text-center" id="Gallery">
        <h1 className="font-extrabold text-2xl mb-4">Gallery</h1>
        <Gallery />
      </section>

      <section className="w-full text-center" id="SortList">
        <h1 className="font-extrabold text-2xl mb-4">Sort List</h1>
        <SortList />
      </section>

      <section className="w-full text-center flex flex-col items-center" id="Cycle">
        <h1 className="font-extrabold text-2xl mb-4">Cycle</h1>
        <Cycle />
      </section>
    </div>
  );
}
