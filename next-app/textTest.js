import prisma from '@/lib/prisma.mjs';
import Tile from '@/app/components/TermSetTile/TermSetTile';

async function getTermSets() {
  const sets = await prisma.termsSet.findMany();
  return sets;
}

export default async function Home() {
  const terms = await getTermSets();
  console.log(terms)
  return (
    <main className="bg-gradient-to-r from-green-200 to-blue-300">
      <section>
        <h1 className="text-4xl font-bold text-center mt-10 mb-5">All Sets</h1>
        {terms.map((term) => (
          <Tile key={term.id} id={term.id} name={term.name} gradeLvl={term.gradeLvl} subject={term.subject} />
        ))}
      </section>
    </main>
  );
}