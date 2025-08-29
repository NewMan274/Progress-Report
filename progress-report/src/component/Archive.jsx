import { useState } from "react";
import { useReportStore } from "../store/useNewReport";
import { Link } from "react-router-dom";
import calculateMetresDone from "../utils/chainageUtils";

function Archive() {
  const reports = useReportStore((state) => state.dailyReports);
  const [selectedDate, setSelectedDate] = useState(null);

  // Group reports by date
  const groupedReports = reports.reduce((acc, report) => {
    if (!acc[report.date]) {
      acc[report.date] = [];
    }
    acc[report.date].push(report);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Reports Archive
        </h2>
        <div>
          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/new-report"
            className="text-blue-500 hover:underline ml-3"
          >
            New Report
          </Link>
        </div>
      </div>

      {reports.length === 0 ? (
        <div className="p-10 text-center text-gray-500 bg-gray-100 rounded-xl shadow-inner">
          No reports available.
        </div>
      ) : (
        <div className="space-y-6">
          {Object.keys(groupedReports).map((date) => (
            <div
              key={date}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              {/* Date header */}
              <button
                className="flex justify-between items-center w-full text-lg font-semibold text-gray-700 hover:text-blue-600 transition"
                onClick={() =>
                  setSelectedDate((prev) => (prev === date ? null : date))
                }
              >
                <span>{date}</span>
                <span className="text-sm text-gray-400">
                  {groupedReports[date].length} report
                  {groupedReports[date].length > 1 && "s"}
                </span>
              </button>

              {/* Reports for the date */}
              {selectedDate === date && (
                <div className="mt-5 grid md:grid-cols-2 gap-6">
                  {groupedReports[date].map((report) => {
                    const metres = calculateMetresDone(
                      report.startChainage?.km,
                      report.startChainage?.m,
                      report.endChainage?.km,
                      report.endChainage?.m
                    );

                    return (
                      <div
                        key={report.id}
                        className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                      >
                        <h3 className="text-md font-semibold text-gray-800 mb-3">
                          {report.itemOfWork}
                        </h3>

                        <div className="space-y-1 text-sm text-gray-600">
                          <p>
                            <strong>Weather:</strong> {report.weatherCondition}
                          </p>
                          <p>
                            <strong>Metres Done:</strong>{" "}
                            <span className="font-medium">{metres} m</span>
                          </p>
                          <p>
                            <strong>Starting CH:</strong>{" "}
                            {report.startChainage?.km}+{report.startChainage?.m}
                          </p>
                          <p>
                            <strong>Ending CH:</strong>{" "}
                            {report.endChainage?.km}+{report.endChainage?.m}
                          </p>
                          <p>
                            <strong>Description:</strong>{" "}
                            {report.taskDescription}
                          </p>
                          <p>
                            <strong>Remark:</strong> {report.generalRemark}
                          </p>
                        </div>

                        {/* Images */}
                        {report.images && report.images.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-3">
                            {report.images.map((imgUrl, idx) => (
                              <img
                                key={idx}
                                src={imgUrl}
                                alt={`report-img-${idx}`}
                                className="w-28 h-28 object-cover rounded-lg shadow-sm border border-gray-200"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Archive;
