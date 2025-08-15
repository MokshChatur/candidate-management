import React from "react";
import { Candidate } from "../types";

interface Props {
  data: Candidate[];
  onEdit: (candidate: Candidate) => void;
  onDelete: (id: number) => void;
}

const CandidateTable: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Skills</th>
          <th className="border p-2">Experience</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((candidate) => (
          <tr key={candidate.id} className="hover:bg-gray-50">
            <td className="border p-2">{candidate.name}</td>
            <td className="border p-2">{candidate.email}</td>
            <td className="border p-2">{candidate.phone}</td>
            <td className="border p-2">{candidate.skills}</td>
            <td className="border p-2">{candidate.experience}</td>
            <td className="border p-2 space-x-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                onClick={() => onEdit(candidate)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => onDelete(candidate.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;
