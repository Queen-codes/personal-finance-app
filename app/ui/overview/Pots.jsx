import prisma from "../../lib/prisma";
import PotIcon from "../../../public/images/icon-pot.svg";
import ColorTag from "../components/ColorTag";
import ArrowRightIcon from "../../../public/images/icon-caret-right.svg";
import Link from "next/link";
import clsx from "clsx";

export default async function Pots() {
  const pots = await prisma.pots.findMany();
  const potsToShow = pots.slice(0, 4);
  //console.log(pots);
  return <PotsCard potsToShow={potsToShow} />;
}

function PotsCard({ potsToShow }) {
  return (
    <section className="bg-white mt-6 rounded-lg p-6">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-grey-900 font-semibold text-xl">Pots</h2>
        <Link href="/pots" className="text-grey-500 text-sm flex items-center">
          See details <ArrowRightIcon className="ml-3" />{" "}
        </Link>
      </header>

      <div className="grid grid-cols-2">
        <div className="rounded-xl bg-beige-100 p-4 flex items-center space-x-4 mb-6 md:mb-0">
          <div className="icon-container">
            <span role="img" aria-label="Money bag icon">
              {" "}
              <PotIcon />
            </span>
          </div>

          <div className="">
            <p className="text-grey-500 text-sm">Total Saved</p>
            <p className="text-grey-900 text-bold text-3xl">$850</p>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-y-4 gap-x-2 md:grid-cols-2 md:gap-y-6 md:gap-x-4 flex-grow">
          {potsToShow.map((pot) => {
            let placementClasses = [];

            if (pot.name === "Concert Ticket") {
              placementClasses = ["row-start-2", "col-start-1"];
            } else if (pot.name === "Gift") {
              placementClasses = ["row-start-1", "col-start-2"];
            }

            return (
              // Added return statement here
              <div
                key={pot.id}
                className={clsx("flex items-center", placementClasses)}
              >
                <ColorTag color={pot.theme} />
                <div className="flex flex-col">
                  <dt className="pot-label">{pot.name}</dt>
                  <dd className="pot-value">${pot.total.toString()}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
