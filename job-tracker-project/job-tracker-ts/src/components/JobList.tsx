import type { Job, JobStatus } from "../types";

interface JobListProps {
  jobs: Job[];
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: JobStatus) => void;
}

export default function JobList({ jobs, onDelete, onStatusChange }: JobListProps) {
  if (jobs.length === 0) return <p>No applications yet.</p>;

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <div>
            <strong>{job.company}</strong> - {job.position} <br />
            {job.date && <small>{job.date}</small>}
          </div>
          <div>
            <select
              value={job.status}
              onChange={(e) => onStatusChange(job.id, e.target.value as JobStatus)}
            >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
            <button onClick={() => onDelete(job.id)}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
}
