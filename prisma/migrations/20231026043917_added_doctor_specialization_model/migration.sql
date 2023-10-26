-- CreateTable
CREATE TABLE "doctors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact-no" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "degree" TEXT NOT NULL,
    "specializaionId" INTEGER NOT NULL,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated-at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specializations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated-at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "specializations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_specializaionId_fkey" FOREIGN KEY ("specializaionId") REFERENCES "specializations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
