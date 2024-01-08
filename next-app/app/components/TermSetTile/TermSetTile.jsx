import Link from 'next/link';

export default function Tile({ id, name, gradeLvl, subject }) {
  return (
    <Link href={`/game/play/${id}`} passHref>
      <div
        className="backdrop-opacity-10 backdrop-invert bg-white/30 
          hover:backdrop-opacity-0 hover:bg-white/80 
          shadow-md rounded-lg p-4 my-4 flex flex-col items-start
          text-gray-800 no-underline cursor-pointer transition-all duration-300"
      >
        <h3 className="mb-2 font-bold text-lg">{name}</h3>
        <p className="mb-1 text-sm">Grade: {gradeLvl}</p>
        <p className="mb-1 text-sm">Subject: {subject}</p>
        <p className="mb-1 text-sm">ID: {id}</p>
      </div>
    </Link>
  );
}
