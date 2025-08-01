"use client";

import { useState } from "react";

export default function MobileNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handlephon = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");  
    value = value.slice(0, 11);       
    setPhoneNumber(value);

    
      const validatePhoneNumber = /^03[0-9]{9}$/.test(value); // ✅ Pakistan regex
    setIsValid(validatePhoneNumber);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">📱 Mobile Number Validator</h1>
      <p className="mb-2">Enter your mobile number:</p>
      
      <input
        className="border border-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={handlephon}
        value={phoneNumber}
          placeholder="e.g. 01712345678"
      />

      {isValid === null ? (
        <p className="mt-2 text-gray-500">Waiting for input...</p>
      ) : isValid ? (
        <p className="mt-2 text-green-600">✅ Valid phone number</p>
      ) : (
        <p className="mt-2 text-red-600">❌ Invalid phone number</p>
      )}
    </div>
  );
}
