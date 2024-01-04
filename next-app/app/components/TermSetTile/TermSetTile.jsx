import Link from 'next/link';

export default function Tile({ id, name, gradeLvl, subject }) {
  return (
    <div style={{ border: '1px solid white', padding: '15px', margin: '10px 0px' }}>
      <Link href={`/game/play/${id}`}>
        {name}
      </Link>
      <h4>{gradeLvl}</h4>
      <h4>{subject}</h4>
      <h4>{id}</h4>
    </div>
  );
}
