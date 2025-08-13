// JobList.js
import JobItem from "./JobItem";

export default function JobList({ jobs, onDelete, onStatusChange }) {
  if (!jobs.length) return <p>No jobs yet.</p>;
  return (
    <ul>
      {jobs.map(job => (
        <JobItem key={job.id} job={job} onDelete={onDelete} onStatusChange={onStatusChange} />
      ))}
    </ul>
  );
}
