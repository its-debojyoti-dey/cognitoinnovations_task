import Image from "next/image";
import useResponsive from "../hooks/useResponsive";

/*
font-family: Inter;
font-weight: 900;
font-style: Black;
font-size: 24px;
leading-trim: NONE;
line-height: 18.2px;
letter-spacing: 0.48px;
vertical-align: middle;

*/

function Logo() {
  const { isDesktop } = useResponsive();
  return (
    <div className="flex items-center gap-2 mb-2">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      {isDesktop && (
        <div>
          <h1 className="text-xl font-bold text-black font-black text-24px">
            Foodzy
          </h1>
          <p className="text-xs text-gray-600">A Treasure of Tastes</p>
        </div>
      )}
    </div>
  );
}

export default Logo;
