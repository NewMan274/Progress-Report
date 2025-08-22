import { useState, useEffect } from "react";
import calculateMetresDone from "../utils/chainageUtils";

function MetresDone({ startKm, startM, endKm, endM }) {
  const [metres, setMetres] = useState("");
  const [isManual, setIsManual] = useState(true);

  useEffect(() => {
    if (startKm && startM && endKm && endM) {
      const result = calculateMetresDone(startKm, startM, endKm, endM);
      setMetres(result);
      setIsManual(false);
    } else {
      setIsManual(true);
      setMetres("");
    }
  }, [startKm, startM, endKm, endM]);

  const handleManualChange = (e) => {
    if (isManual) {
      const val = e.target.value.replace(/\D/g, "");
      setMetres(val);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Metres Done
      </label>
      <input
        type="text"
        value={metres}
        onChange={handleManualChange}
        disabled={!isManual}
        className={`w-24 border border-gray-300 rounded px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          !isManual ? "bg-gray-100 text-gray-500" : ""
        }`}
        placeholder="0"
      />
      {!isManual && (
        <span className="ml-2 text-xs text-blue-300 font-semibold">
          (Auto-calculated)
        </span>
      )}
    </div>
  );
}

export default MetresDone;