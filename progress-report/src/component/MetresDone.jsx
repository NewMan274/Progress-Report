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
    <div>
      <label>Metres Done</label>
      <input
        type="text"
        value={metres}
        onChange={handleManualChange}
        disabled={!isManual}
        className="w-20 border border-gray-300 rounded p-2 text-center"
        placeholder="0"
      />
    </div>
  );
}

export default MetresDone;