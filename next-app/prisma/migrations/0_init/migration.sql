-- CreateTable
CREATE TABLE "termsSet" (
    "id" SERIAL NOT NULL,
    "gradeLvl" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "terms" TEXT[],
    "standard" TEXT NOT NULL,
    "topic" TEXT NOT NULL,

    CONSTRAINT "termsSet_pkey" PRIMARY KEY ("id")
);

