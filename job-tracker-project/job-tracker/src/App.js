import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  const [jobs, setJobs] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever jobs change
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => setJobs([...jobs, { ...job, id: Date.now() }]);
  const deleteJob = (id) => setJobs(jobs.filter(job => job.id !== id));
  const updateStatus = (id, status) =>
    setJobs(jobs.map(job => job.id === id ? { ...job, status } : job));

  return (
    <div className="App">
      <h1>Job Tracker</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} onDelete={deleteJob} onStatusChange={updateStatus} />
    </div>
  );
}

export default App;
