import React from "react";
import { Candidate } from "../types";

interface Props {
  data: Candidate[];
  onEdit: (candidate: Candidate) => void;
}

const CandidateCards: React.FC<Props> = ({ data, onEdit }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((candidate) => (
        <div key={candidate.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
          <h2 className="text-lg font-bold">{candidate.name}</h2>
          <p><strong>Email:</strong> {candidate.email}</p>
          <p><strong>Phone:</strong> {candidate.phone}</p>
          <p><strong>Skills:</strong> {candidate.skills}</p>
          <p><strong>Experience:</strong> {candidate.experience}</p>
          <button
            className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            onClick={() => onEdit(candidate)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default CandidateCards;
