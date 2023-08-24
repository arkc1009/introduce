'use client';

import { Reorder } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import Item from './Item';

const initialData: string[] = ['1', '2', '3', '4'];

function ReOrder() {
  const [items, setItems] = useState<string[]>(initialData);

  return (
    <Reorder.Group
      axis="y"
      className="relative flex flex-col justify-center items-center gap-4"
      onReorder={setItems}
      values={items}
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}

export default ReOrder;
// interface Item {
//   id: string;
//   value: string;
// }

// const initialData: Item[] = [
//   { id: '1', value: 'value1' },
//   { id: '2', value: 'value2' },
//   { id: '3', value: 'value3' },
//   { id: '4', value: 'value4' },
// ];

// function ReOrder() {
//   const [items, setItems] = useState<Item[]>(initialData);

//   const ids = useMemo(() => items.map((item) => item.id), [items]);

//   const handleOnReorder = useCallback(() => {}, []);

//   return (
//     <Reorder.Group
//       axis="y"
//       className="flex flex-col justify-center items-center gap-4"
//       values={items}
//       onReorder={setItems}
//     >
//       {items.map((item) => (
//         <Reorder.Item
//           className="h-[45px] flex items-center border border-slate-900 rounded-lg p-4 cursor-pointer bg-red-200"
//           key={item.id}
//           value={item}
//         >
//           {item.value}
//         </Reorder.Item>
//       ))}
//     </Reorder.Group>
//   );
// }

// export default ReOrder;
