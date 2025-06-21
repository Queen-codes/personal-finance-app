-- CreateTable
CREATE TABLE "balance" (
    "id" SERIAL NOT NULL,
    "current" DECIMAL,
    "income" DECIMAL,
    "expenses" DECIMAL,

    CONSTRAINT "balance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budgets" (
    "id" SERIAL NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "maximum" INTEGER NOT NULL,
    "theme" VARCHAR(10) NOT NULL,

    CONSTRAINT "budgets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" UUID NOT NULL,
    "avatar" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "amount" DECIMAL NOT NULL,
    "recurring" BOOLEAN NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pots" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "target" DECIMAL NOT NULL,
    "total" DECIMAL NOT NULL,
    "theme" VARCHAR(10) NOT NULL,

    CONSTRAINT "pots_pkey" PRIMARY KEY ("id")
);
