import { useState } from "react";
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

    // Reset chainage inputs after submission
    setResetChainage(true);
    setTimeout(() => setResetChainage(false), 0); 

    alert("Report submitted successfully!");
  };

  return (
    <div>
      <h1>New Report for: <span>{formatedDate}</span></h1>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label>Item of work</label>
          <select
            name="items"
            id="work-items"
            value={dailyReports.itemOfWork}
            onChange={(e) => setDailyReports(prev => ({ ...prev, itemOfWork: e.target.value }))}
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
          <label>Weather Condition</label>
          <select
            name="weather"
            id="weather"
            value={dailyReports.weatherCondition}
            onChange={(e) => setDailyReports(prev => ({ ...prev, weatherCondition: e.target.value }))}
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
          <label>Starting CH</label>
          <ChainageInput onChange={(val) => {
            setStartCh(val);
            setDailyReports((prev) => ({
              ...prev,
              startChainage: val,
              metresDone: val
            }));
          }} reset={resetChainage} />
        </div>
        <div>
          <label>Ending CH</label>
          <ChainageInput onChange={(val) => {
            setEndCh(val);
            setDailyReports((prev) => ({
              ...prev,
              startChainage: val,
              metresDone: val
            }));
          }} reset={resetChainage} />
        </div>

        {/* New Metres Done */}
        <MetresDone
          startKm={startCh.km}
          startM={startCh.m}
          endKm={endCh.km}
          endM={endCh.m}
        />

        <div>
          <label>Task Description</label>
          <textarea
            name="task-description"
            id="task-description"
            value={dailyReports.taskDescription}
            onChange={(e) => setDailyReports(prev => ({ ...prev, taskDescription: e.target.value }))}
          />
        </div>
        <div>
          <label>General Remark</label>
          <textarea
            value={dailyReports.generalRemark}
            onChange={(e) => setDailyReports(prev => ({ ...prev, generalRemark: e.target.value }))}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewReport;
