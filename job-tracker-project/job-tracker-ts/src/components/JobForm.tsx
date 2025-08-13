import { useState, type FormEvent } from "react";
import type { Job, JobStatus } from "../types";

interface JobFormProps {
  onAdd: (job: Job) => void;
}

export default function JobForm({ onAdd }: JobFormProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<JobStatus>("Applied");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!company || !position) return;

    const newJob: Job = {
      id: Date.now(),
      company,
      position,
      date,
      status,
    };

    onAdd(newJob);
    setCompany("");
    setPosition("");
    setDate("");
    setStatus("Applied");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as JobStatus)}>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
