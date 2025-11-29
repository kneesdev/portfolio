"use client";

import { useEffect, useState } from "react";

export function Greeting() {
  const baseText = "hello, i'm lee!";
  const [text, setText] = useState(baseText);
  /* had this banger idea at 4am */
  const stages = [
    "helloo, i'm lee!",
    "hellooo, i'm lee!",
    "helloooo, i'm lee!",
    "hellooooo, i'm lee!",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(stages[index]);
      index += 1;
      if (index >= stages.length) {
        clearInterval(interval); //stop after the last stage
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6">
      {text}
    </h1>
  );
}
