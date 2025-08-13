import { useState } from "react";

export default function JobForm({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company) return;
    addJob({ title, company, status: "Applied" });
    setTitle("");
    setCompany("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job Title" />
      <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" />
      <button type="submit">Add Job</button>
    </form>
  );
}
