import React, { useState } from "react";
import { Candidate } from "./types";
import { initialCandidates } from "./data/sampleCandidates";
import CandidateTable from "./components/CandidateTable";
import CandidateCards from "./components/CandidateCards";
import SidePanel from "./components/SidePanel";

const App: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleAdd = () => {
    setSelectedCandidate(null);
    setIsPanelOpen(true);
  };

  const handleEdit = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsPanelOpen(true);
  };

  const handleDelete = (id: number) => {
    setCandidates(prev => prev.filter(c => c.id !== id));
  };

  const handleSave = (candidate: Candidate) => {
    if (candidate.id) {
      setCandidates(prev => prev.map(c => c.id === candidate.id ? candidate : c));
    } else {
      candidate.id = Date.now();
      setCandidates(prev => [...prev, candidate]);
    }
    setIsPanelOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Candidate Management</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Candidate
        </button>
      </div>

      <CandidateTable data={candidates} onEdit={handleEdit} onDelete={handleDelete} />
      <CandidateCards data={candidates} onEdit={handleEdit} />

      <SidePanel
        isOpen={isPanelOpen}
        candidate={selectedCandidate}
        onSave={handleSave}
        onCancel={() => setIsPanelOpen(false)}
      />
    </div>
  );
};

export default App;
