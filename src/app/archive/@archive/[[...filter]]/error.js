"use client";
export default function ArchiveFilterError({ error }) {
  return (
    <div>
      <h2>An error occurred!</h2>
      <p>{error.message || "Invaled filter value!"}</p>
    </div>
  );
}
