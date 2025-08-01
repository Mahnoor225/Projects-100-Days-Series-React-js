"use client";

import { useState, useEffect } from "react";

export default function PasswordValidator() {
  const [input, setInput] = useState("");
  const [strength, setStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  // ✅ Run validation whenever input changes
  useEffect(() => {
    const Strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const Medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const Weak = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{4,}$/;

    if (input === "") {
      setStrength("");
    } else if (Strong.test(input)) {
      setStrength(" Strong Password");
    } else if (Medium.test(input)) {
      setStrength(" Medium Password");
    } else if (Weak.test(input)) {
      setStrength("Weak Password");
    } else {
      setStrength("Very Weak");
    }
  }, [input]);

  const password = () => {
    setShowPassword(!showPassword);
  };
 

  return (
    <div>
      <h1 className="text-3xl m-10 text-center p-6 rounded-full bg-amber-700 text-white">
        Password Validator
      </h1>

      <div className="grid justify-center items-center gap-3">
      <div className="flex   items-center gap-3">
          <input
          className="border p-2 text-center"
           type={showPassword ? "text" : "password"} // ✅ Use state here
          placeholder="Enter password"
          onChange={(e) => setInput(e.target.value)}
        />
        <p onClick={password}>{showPassword ? "hide" : "show"}</p>
      </div>
        <p className="text-lg font-semibold">{strength}</p>
      </div>
    </div>
  );
}
