//import Balance from "../ui/overview/Balance";
//import Pots from "../ui/overview/Pots";

import Balance from "../../ui/overview/Balance";
import Pots from "../../ui/overview/Pots";

export default function Page() {
  return (
    <div className="mr-[1rem] ml-[1rem] max-w-6xl mx-auto">
      <h1 className="text-grey-900 text-3xl font-bold tracking-wide mb-7 mt-8">
        Overview
      </h1>
      <Balance />
      <Pots />
    </div>
  );
}
