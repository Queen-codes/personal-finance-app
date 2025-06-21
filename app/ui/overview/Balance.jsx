//import { prisma } from "../../lib/prisma";
import prisma from "../../lib/prisma";

export default async function Balance() {
  const balances = await prisma.balance.findMany();
  const balance = balances[0];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {Object.entries(balance)
        .filter(([key]) => key !== "id")
        .map(([key, value], index) => (
          //console.log({ key, value, index, variant: index === 0 ? 'primary' : 'secondary' });

          <BalanceCard
            key={key}
            title={formatTitle(key)}
            amount={value}
            variant={index === 0 ? "primary" : "secondary"}
          />
        ))}
    </div>
  );
}

function BalanceCard({ title, amount, variant }) {
  const isPrimary = variant === "primary";
  const cardClasses = isPrimary
    ? "bg-neutral-900 text-white"
    : "bg-white text-neutral-900";

  return (
    <div className={`${cardClasses} rounded-xl p-4 flex-1 min-w-[180px]`}>
      <p className="text-sm mb-2">{title}</p>
      <p className="text-3xl font-bold">{formatCurrency(amount)}</p>
    </div>
  );
}

// Capitalize + add "Balance" to current
function formatTitle(key) {
  if (key === "current") return "Current Balance";
  return key.charAt(0).toUpperCase() + key.slice(1);
}

// Format number to USD currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
