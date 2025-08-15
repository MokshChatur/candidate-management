import React, { useState, useEffect } from "react";
import { Candidate } from "../types";

interface Props {
  isOpen: boolean;
  candidate: Candidate | null;
  onSave: (candidate: Candidate) => void;
  onCancel: () => void;
}

const SidePanel: React.FC<Props> = ({ isOpen, candidate, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Candidate>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: ""
  });

  useEffect(() => {
    if (candidate) setFormData(candidate);
    else setFormData({ id: 0, name: "", email: "", phone: "", skills: "", experience: "" });
  }, [candidate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert("Name and Email are required");
    onSave(formData);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">{candidate ? "Edit Candidate" : "Add Candidate"}</h2>
        <button onClick={onCancel} className="text-gray-500">✕</button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-3">
        {["name", "email", "phone", "skills", "experience"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={(formData as any)[field]}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        ))}
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default SidePanel;
