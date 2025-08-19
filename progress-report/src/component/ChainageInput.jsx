import { useState, useRef, useEffect } from "react";

function ChainageInput({ onChange, resetSignal }) {
  const [km, setKm] = useState("");
  const [m, setM] = useState("");
  const mRef = useRef(null);

  // Send changes to parent
  useEffect(() => {
    if (onChange) {
      onChange({ km, m });
    }
  }, [km, m, onChange]);

  // Reset when parent changes resetSignal
  useEffect(() => {
    if (resetSignal) {
      setKm("");
      setM("");
    }
  }, [resetSignal]);

  const handleKmChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 2) {
      setKm(val.slice(0, 2));
      setM(val.slice(2, 5));
      mRef.current.focus();
    } else {
      setKm(val);
    }
  };

  const handleMChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    setM(val.slice(0, 3));
  };

  return (
    <div>
      <div className="flex items-center gap-1">
        <input
          type="text"
          value={km}
          onChange={handleKmChange}
          className="w-14 border border-gray-300 rounded p-2 text-center font-mono"
          maxLength={2}
          placeholder="00"
        />
        <span className="text-lg font-bold">+</span>
        <input
          ref={mRef}
          type="text"
          value={m}
          onChange={handleMChange}
          className="w-16 border border-gray-300 rounded p-2 text-center font-mono"
          maxLength={3}
          placeholder="000"
        />
      </div>
    </div>
  );
}

export default ChainageInput;
