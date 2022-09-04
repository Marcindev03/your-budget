import React, { FC } from "react";
import { useSelector } from "react-redux";

export function withSlice<T>(
  Component: FC<{ serverPayload?: any; slice: any; [key: string]: any }>,
  selectSlice: (state: T) => unknown
) {
  return ({ serverPayload }: { serverPayload?: any }) => {
    const slice = useSelector(selectSlice);

    return <Component serverPayload={serverPayload} slice={slice} />;
  };
}
