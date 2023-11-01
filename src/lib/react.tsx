import React, { MutableRefObject } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "fab-button": {
        ref?: MutableRefObject<HTMLElement | null>;
        label?: string;
        onClick?: (e: MouseEvent) => void;
      };
    }
  }
}
