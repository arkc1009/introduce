'use client';

import { PropsWithChildren, RefObject, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import Navigator, { NavigatorOptions } from './Navigator';

export interface NaviSectionProps {
  title: string;
  index: number;
  portalElement?: HTMLElement | null;
  navigator?: NavigatorOptions;
}

function Section({
  index,
  title,
  children,
  portalElement,
  navigator,
}: PropsWithChildren<NaviSectionProps>) {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {portalElement
        ? ReactDOM.createPortal(
            <Navigator title={title} targetRef={targetRef} index={index} options={navigator} />,
            portalElement,
          )
        : null}

      <div ref={targetRef} className="pt-4">
        {children}
      </div>
    </>
  );
}

export default Section;
