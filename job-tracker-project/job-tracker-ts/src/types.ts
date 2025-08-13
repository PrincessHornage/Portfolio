export type JobStatus = "Applied" | "Interviewing" | "Offer" | "Rejected";

export interface Job {
  id: number;
  company: string;
  position: string;
  date?: string;
  status: JobStatus;
}
