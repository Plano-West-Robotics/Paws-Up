import prisma from '@/lib/prisma.mjs';

export default function GET(request, { termSet }) {
  return (
    <div>
      <h1>{termSet.name}</h1>
      <p>Terms: {termSet.terms}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const termSets = await prisma.termsSet.findMany();
  const paths = termSets.map((termSet) => ({ params: { id: termSet.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const termSet = await prisma.termsSet.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return {
    props: {
      termSet,
    },
  };
}
