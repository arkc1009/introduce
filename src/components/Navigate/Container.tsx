'use client';

import React, { PropsWithChildren, useMemo, useState } from 'react';

import Section from './Section';

function Container({ children }: PropsWithChildren) {
  const [portalElement, setPortalElement] = useState<HTMLUListElement | null>(null);

  const elements = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        throw new Error('not element!');
      }

      return child as React.ReactElement<PropsWithChildren<{ title: string }>>;
    });
  }, [children]);

  return (
    <div className="relative w-full h-full">
      <ul
        ref={setPortalElement}
        className="fixed left-0 top-0 w-[262px] p-7 max-h-screen flex flex-col gap-4 overflow-y-auto scrollbar-hide"
      ></ul>

      <div className="flex flex-col px-7 py-4 pl-[262px]">
        {elements?.map((element, index) => {
          return (
            <Section
              title={element.props.title}
              key={element.props.title}
              portalElement={portalElement}
              index={index}
              // navigator={{ className: 'bg-blue-100 text-gray-900' }}
            >
              {element.props.children}
            </Section>
          );
        })}
      </div>
    </div>
  );
}

export default Container;
