import Link from 'next/link'; // Import Link
import prisma from '@/lib/prisma.mjs';
import Tile from '@/app/components/TermSetTile/TermSetTile';

async function getTermSets(grade, subject) {
  const sets = await prisma.termsSet.findMany({
    where: {
        gradeLvl: parseInt(grade),
        subject: subject
    }
});
  return sets;
}

export default async function Home({ params: { grade, subject } }) {
  const selectedGrade = grade;
  const selectedSubject = subject;
  const terms = await getTermSets(grade, subject); // No need for `await` here, as it's not in an async function

  return (
    <main className="bg-gradient-to-r from-green-200 to-blue-300">
      <section>
        <div className="flex flex-row items-center space-x-4 mt-5 mb-8">
          {/* Grade Level Dropdown */}
          <select 
            className="flex-grow backdrop-opacity-10 backdrop-invert bg-white/30 hover:backdrop-opacity-0 hover:bg-white/80 shadow-md rounded-lg p-4 text-gray-800 cursor-pointer transition-all duration-300"
            value={selectedGrade}
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
          >
            <option value="">Select Subject</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>

          {/* Load Button */}
          
        </div>

        <div className="flex flex-row items-center space-x-4 mt-5 mb-8"
            >

          {/* New Search Link */}
          <Link className="flex-grow text-center backdrop-opacity-10 backdrop-invert bg-white/30 hover:backdrop-opacity-0 hover:bg-white/80 shadow-md rounded-lg p-4 text-gray-800 cursor-pointer transition-all duration-300" href={`/game`}>
            
              New Search
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mt-10 mb-5">All Sets</h1>
        
        {terms.length > 1 ? (
        terms.map((term) => (
            <Tile
              key={term.id}
              id={term.id}
              length={term.terms.length}
              topic={term.topic}
              gradeLvl={term.gradeLvl}
              subject={term.subject}
              standards={term.standard}
            />
          ))
        ) : (
          <p className="text-center text-xl font-bold mt-5">
            No term sets found for the selected grade and subject. Please try a New Search.
          </p>
        )}
      </section>
    </main>
  );
}
