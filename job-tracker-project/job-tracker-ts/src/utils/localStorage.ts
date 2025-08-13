import type { Job } from "../types";

export function saveJobs(jobs: Job[]): void {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

export function loadJobs(): Job[] {
  const stored = localStorage.getItem("jobs");
  return stored ? JSON.parse(stored) as Job[] : [];
}
