import type { JobStatus } from "../types";

interface FilterProps {
  filter: JobStatus | "All";
  setFilter: (status: JobStatus | "All") => void;
}

export default function Filter({ filter, setFilter }: FilterProps) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value as JobStatus | "All")}>
      <option value="All">All</option>
      <option value="Applied">Applied</option>
      <option value="Interviewing">Interviewing</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
    </select>
  );
}
