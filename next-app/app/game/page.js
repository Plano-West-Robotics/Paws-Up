import prisma from '@/lib/prisma.mjs';
import Tile from '@/app/components/TermSetTile/TermSetTile'


async function getTermSets() {
  const sets = await prisma.termsSet.findMany()
  return sets
}

export default async function Home() {
  const terms = await getTermSets();
  return (
    <main >
      <h1>All Sets</h1>
      <h1>click the name of the term set to select it!</h1>
      {
        terms.map((term) => {
          return (
            <Tile
            key={term.id}
            id={term.id}
            name={term.name}
            gradeLvl={term.gradeLvl}
            subject={term.subject}
            />
          )
        })
      }
    </main>
  )
}