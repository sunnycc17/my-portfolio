"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({ strings }) {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      typeSpeed: 35, // slightly slower for smoother typing
      backSpeed: 20, // slower deletion
      backDelay: 2000, // longer pause before deleting
      loop: true,
      startDelay: 500,
      showCursor: true,
      cursorChar: "|", // will style with CSS
    });

    return () => typed.destroy();
  }, [strings]);

  return (
    <span
      id="typed-cursor"
      ref={el}
      className="inline h-1 text-lg sm:text-xl md:text-2xl tracking-wide text-purple-300"
    />
  );
}
