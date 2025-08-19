//import { useReportStore } from "../store/useNewReport";

function Archive() {
  // Access the reports array from Zustand store
  //const reports = useReportStore((state) => state.dailyReports);

  return (
    <div>
      <h2>Reports Archive</h2>
      <div>
        <Link to="/">
          <p>Back home</p>
        </Link>
      </div>
{/*       {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <ul>
          {reports.map((report, index) => (
            <li key={index}>
              {Object.entries(report).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default Archive;