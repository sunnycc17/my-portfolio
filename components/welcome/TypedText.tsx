"use client";

import React, { FC, useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings?: string[];
}

const TypedText: FC<TypedTextProps> = ({ strings = [] }) => {
  // Correctly type refs as possibly null
  const el = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  // longest string width pre-reserved
  const longest = strings.reduce((max, s) => Math.max(max, s.length), 0);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 35,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      startDelay: 200,
      showCursor: false, // IMPORTANT
    });

    return () => typed.destroy();
  }, [strings]);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        whiteSpace: "nowrap",
        minWidth: `${longest}ch`,
      }}
    >
      <span ref={el}>{strings[0]}</span>
      <span ref={cursorRef} className="typed-static-cursor">
        |
      </span>
    </span>
  );
};

export default TypedText;
