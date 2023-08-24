import { Reorder } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface ItemProps {
  item: string;
}

function Item({ item }: PropsWithChildren<ItemProps>) {
  return (
    <Reorder.Item
      className="relative w-full h-[45px] flex items-center border border-slate-900 rounded-lg p-4 cursor-pointer bg-red-200"
      value={item}
      id={`${item}`}
    >
      {item}
    </Reorder.Item>
  );
}

export default Item;
