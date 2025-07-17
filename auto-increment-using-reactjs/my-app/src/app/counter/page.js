import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const inc = () => {
    setCount((prev) => prev + 1);
  };

  const dec = () => {
    setCount((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 10) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 min-h-screen bg-gray-100 text-white">
      <button
        onClick={inc}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
      >
        Button +
      </button>

      <h1 className="bg-red-800 text-center px-6 py-3 rounded-lg min-w-[120px]">
        Counter: {count}
      </h1>

      <button
        onClick={dec}
        className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-black"
      >
        Button -
      </button>

      <h1 className="bg-purple-800 text-center px-6 py-3 rounded-lg min-w-[120px]">
        Counter: {count}
      </h1>
    </div>
  );
}
