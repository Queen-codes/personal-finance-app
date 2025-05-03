//import Image from "next/image";
import NavLinks from "./navLinks";

const BottomNav = () => {
  return (
    <div className="lg:hidden bg-grey-900 fixed bottom-0 rounded-tl-xl rounded-tr-xl w-[100vw]">
      <NavLinks isBottomNav={true} />
    </div>
  );
};

export default BottomNav;
