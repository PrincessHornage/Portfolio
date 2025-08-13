import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Filter from "./components/Filter";
import { saveJobs, loadJobs } from "./utils/localStorage";
import type { Job, JobStatus } from "./types";
import "./styles.css";

export default function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filter, setFilter] = useState<JobStatus | "All">("All");

  useEffect(() => {
    setJobs(loadJobs());
  }, []);

  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);

  function addJob(job: Job) {
    setJobs([job, ...jobs]);
  }

  function deleteJob(id: number) {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  function changeStatus(id: number, status: JobStatus) {
    setJobs(jobs.map((job) => job.id === id ? { ...job, status } : job));
  }

  const filteredJobs = filter === "All" ? jobs : jobs.filter(j => j.status === filter);

  return (
    <div className="container">
      <h1>Job Tracker</h1>
      <JobForm onAdd={addJob} />
      <Filter filter={filter} setFilter={setFilter} />
      <JobList jobs={filteredJobs} onDelete={deleteJob} onStatusChange={changeStatus} />
    </div>
  );
}
