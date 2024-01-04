import Link from 'next/link';

export default function Tile({ id, name, gradeLvl, subject }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <h3 style={{ marginBottom: '8px' }}>
        <Link href={`/game/play/${id}`} passHref>
          <div style={{ textDecoration: 'none', color: '#333333', fontWeight: 'bold', cursor: 'pointer' }}>
            {name}
          </div>
        </Link>
      </h3>
      <p style={{ marginBottom: '4px' }}>Grade: {gradeLvl}</p>
      <p style={{ marginBottom: '4px' }}>Subject: {subject}</p>
      <p>ID: {id}</p>
    </div>
  );
}
