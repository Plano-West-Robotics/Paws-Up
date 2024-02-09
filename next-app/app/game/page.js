'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const router = useRouter();

  function loadTermSets() {
    if (selectedGrade && selectedSubject) {
      router.push(`/game/${selectedGrade}/${selectedSubject}`);
    } else {
      // Handle the case where either grade or subject is not selected
      console.error('Please select both grade and subject');
    }
  }

  return (
    <main className="bg-gradient-to-r from-green-200 to-blue-300">
      <section>
        <form>
          <div className="flex flex-row items-center space-x-4 mt-5 mb-8">
            {/* Grade Level Dropdown */}
            <select
              className="flex-grow backdrop-opacity-10 backdrop-invert bg-white/30 hover:backdrop-opacity-0 hover:bg-white/80 shadow-md rounded-lg p-4 text-gray-800 cursor-pointer transition-all duration-300"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              required
            >
              <option value="">Select Grade</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            {/* Subject Area Dropdown */}
            <select
              className="flex-grow backdrop-opacity-10 backdrop-invert bg-white/30 hover:backdrop-opacity-0 hover:bg-white/80 shadow-md rounded-lg p-4 text-gray-800 cursor-pointer transition-all duration-300"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              required
            >
              <option value="">Select Subject</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
            
          </div>
          <div className="flex flex-row items-center space-x-4 mt-5 mb-8">
            <button
              type="button"
              className="flex-grow backdrop-opacity-10 backdrop-invert bg-white/30 hover:backdrop-opacity-0 hover:bg-white/80 shadow-md rounded-lg p-4 text-gray-800 cursor-pointer transition-all duration-300"
              onClick={loadTermSets}
            >
              Load
            </button></div>
        </form>
      </section>
    </main>
  );
}
