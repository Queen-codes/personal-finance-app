import prisma from "../../lib/prisma";
import PotIcon from "../../../public/images/icon-pot.svg";
import ColorTag from "../components/ColorTag";
import clsx from "clsx";

export default async function Pots() {
  const pots = await prisma.pots.findMany();
  const potsToShow = pots.slice(0, 4);
  //console.log(pots);
  return <PotsCard potsToShow={potsToShow} />;
}

function PotsCard({ potsToShow }) {
  return (
    <section className="bg-white mt-6">
      <header>
        <h2>Pots</h2>
        <a href="/details">See details</a>
      </header>

      <div className="main-flex-grid">
        <div className="total-saved bg-beige-100">
          <div className="icon-container">
            <span role="img" aria-label="Money bag icon">
              {" "}
              <PotIcon />
            </span>
          </div>

          <div className="saved-amount-details bg-beige-100 ">
            <p className="label">Total Saved</p>
            <p className="amount">$850</p>
          </div>
        </div>

        <dl className="pot-definitions grid grid-cols-2 gap-3.5">
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
