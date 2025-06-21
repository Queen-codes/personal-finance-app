import Image from "next/image";
import NavLinks from "./navLinks";
import LogoLarge from "../../../public/images/logo-large.svg"; // how i was importing before the nect js error came up
import LogoSmall from "../../../public/images/logo-small.svg"; // how i was importing before the nect js error came up
import UnMinimizeIcon from "../../../public/images/unminimize.svg";
const SideNav = ({ isMinimized, setIsMinimized }) => {
  //const imgSrc = isMinimized ? LogoSmall.src : LogoLarge.src; // tried this, diddnt work
  //const imgSrc = isMinimized
  // ? "/images/logo-small.svg"
  //: "/images/logo-large.svg";

  const CurrentLogo = isMinimized ? LogoSmall : LogoLarge;

  const logoDimensions = {
    small: { width: 12, height: 21 },
    large: { width: 121.454, height: 21.76 },
  };

  return (
    <nav
      className={`bg-grey-900 flex-col h-full fixed top-0 left-0 z-50 rounded-r-2xl px-10 transition-[width] duration-600 ease-in hidden lg:flex ${
        isMinimized ? `w-32 px-4` : `w-[300px] px-10`
      }`}
      aria-label="Main Navigation"
    >
      <div className="mt-8 mb-6 flex-shrink-0">
        <CurrentLogo />
      </div>

      <div className="flex-grow overflow-y-auto">
        <NavLinks isMinimized={isMinimized} />
      </div>

      <div
        className="flex gap-3.5 mb-28 items-center cursor-pointer"
        onClick={() => setIsMinimized(!isMinimized)}
        role="button"
        aria-label={isMinimized ? "Expand menu" : "Minimize menu"}
      >
        {isMinimized ? (
          // Show only the alternate icon when minimized
          <UnMinimizeIcon className="text-grey-300" />
        ) : (
          // 👉 Show the original image + text when expanded
          <>
            <div>
              <Image
                src="/images/icon-minimize-menu.svg"
                width={20}
                height={20}
                alt="arrow-icon"
                className="transition-transform duration-300"
              />
            </div>
            <p className="text-grey-300">Minimize Menu</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default SideNav;
