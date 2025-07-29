'use client';

import { useState } from "react";

export default function Generate() {
  const minValue = 1;
  const maxValue = 10000;

  const [randomNumber, setRandomNumber] = useState(null);

  const gen = () => {
    const raMath = Math.random();
    const random = Math.floor(raMath * (maxValue - minValue + 1)) + minValue;
    setRandomNumber(random);
    console.log("Math.random():", raMath);
    console.log("Generated number:", random);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Random Number Generator</h1>

      <button
        className="bg-emerald-600 text-white px-4 py-2 rounded mt-4"
        onClick={gen}
      >
        Generate
      </button>

      {randomNumber !== null && (
        <div className="mt-4">
          <h2 className="text-2xl">Random Number: {randomNumber}</h2>
        </div>
      )}
    </div>
  );
}
