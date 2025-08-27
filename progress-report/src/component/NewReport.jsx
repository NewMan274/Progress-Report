import { useState, useCallback } from "react";
import ChainageInput from "./ChainageInput";
import MetresDone from "./MetresDone";
import { useReportStore } from "../store/useNewReport";
import { Link } from "react-router-dom";

function NewReport() {
  const today = new Date();
  const formatedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [startCh, setStartCh] = useState({ km: "", m: "" });
  const [endCh, setEndCh] = useState({ km: "", m: "" });
  const [images, setImages] = useState([]);

  const handleStartChainage = useCallback((val) => {
    setStartCh(val);
  }, []);

  const handleEndChainage = useCallback((val) => {
    setEndCh(val);
  }, []);

  const addReport = useReportStore((state) => state.addReport);

  const [resetChainage, setResetChainage] = useState(false);

  const [dailyReports, setDailyReports] = useState({
    date: formatedDate,
    itemOfWork: "",
    weatherCondition: "",
    startChainage: { km: "", m: "" },
    endChainage: { km: "", m: "" },
    metresDone: { startKm: "", startM: "", endKm: "", endM: "" },
    taskDescription: "",
    generalRemark: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dailyReports.itemOfWork && !dailyReports.metresDone) {
      alert("Please fill all required fields.");
      return;
    }

    const newReport = {
      id: Date.now(),
      date: formatedDate,
      itemOfWork: dailyReports.itemOfWork,
      weatherCondition: dailyReports.weatherCondition,
      startChainage: dailyReports.startChainage,
      endChainage: dailyReports.endChainage,
      metresDone: dailyReports.metresDone,
      taskDescription: dailyReports.taskDescription,
      generalRemark: dailyReports.generalRemark,
      images: images.map(img => URL.createObjectURL(img)),
    };

    addReport(newReport);

    setDailyReports({
      date: formatedDate,
      itemOfWork: "",
      weatherCondition: "",
      startChainage: { km: "", m: "" },
      endChainage: { km: "", m: "" },
      metresDone: { startKm: "", startM: "", endKm: "", endM: "" },
      taskDescription: "",
      generalRemark: "",
    });

    setImages([]);

    setResetChainage(true);
    setTimeout(() => setResetChainage(false), 0);

    alert("Report submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <div className="flex gap-1.5 mb-5">
        <h1 className="text-lg font-semibold mb-2">
          New Report for: <span className="text-blue-400 text-2xl font-semibold">{formatedDate}</span>
        </h1>
        <div className="ml-auto pt-1.5">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/archive" className="text-blue-500 hover:underline ml-3">
            Archive
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Item of work</label>
          <select
            name="items"
            id="work-items"
            value={dailyReports.itemOfWork}
            onChange={(e) => setDailyReports(prev => ({ ...prev, itemOfWork: e.target.value }))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>Select an option</option>
            <option value="Excavation">Earthwork</option>
            <option value="Subgrade">Subgrade</option>
            <option value="Subbase">Subbase</option>
            <option value="Pavement">Pavement</option>
            <option value="Drainage/Kerbs">Drainage/Kerbs</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Weather Condition</label>
          <select
            name="weather"
            id="weather"
            value={dailyReports.weatherCondition}
            onChange={(e) => setDailyReports(prev => ({ ...prev, weatherCondition: e.target.value }))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>Select weather</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rainy">Rainy</option>
            <option value="Windy">Windy</option>
            <option value="Foggy">Foggy</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Starting CH</label>
          <ChainageInput onChange={handleStartChainage} resetSignal={resetChainage} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ending CH</label>
          <ChainageInput onChange={handleEndChainage} resetSignal={resetChainage} />
        </div>
        <MetresDone
          startKm={startCh.km}
          startM={startCh.m}
          endKm={endCh.km}
          endM={endCh.m}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Description</label>
          <textarea
            name="task-description"
            id="task-description"
            value={dailyReports.taskDescription}
            onChange={(e) => setDailyReports(prev => ({ ...prev, taskDescription: e.target.value }))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">General Remark</label>
          <textarea
            value={dailyReports.generalRemark}
            onChange={(e) => setDailyReports(prev => ({ ...prev, generalRemark: e.target.value }))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Pictures:
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            capture="environment"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setImages(prev => [...prev, ...files]);
            }}
            className="block w-1/5 text-sm pl-3 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
          <div className="flex flex-wrap gap-4 mt-4">
            {images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`preview-${idx}`}
                  className="w-24 h-24 object-cover rounded shadow"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImages(prev => prev.filter((_, i) => i !== idx));
                  }}
                  className="absolute top-1 right-1 bg-red-200 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow hover:bg-red-300"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-1/4 mx-auto mt-4 px-6 py-2 bg-green-500 text-white rounded font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewReport;
