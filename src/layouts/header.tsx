import Image from "next/image";
import { FunctionComponent } from "react";
import IconBTN from "../components/IconBtn";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <header className="flex justify-start h-20 w-full fixed top-0 left-0 items-center px-5">
        <div className="mr-auto flex items-center h-full gap-3">
          <Image
            src={"/headerLogo.png"}
            width={150}
            height={34}
            alt="Logo"
            className="mr-5"
          />
          <IconBTN
            iconName="heroicons:moon"
            iconSize={"1.5em"}
          />
          <IconBTN
            iconName="heroicons:magnifying-glass"
            iconSize={"1.5em"}
          />
        </div>
        <div className="ml-auto flex items-center h-full gap-3">
          <IconBTN
            iconName="heroicons:bell"
            iconSize={"1.5em"}
          />
          <div className="flex">
            <IconBTN
              iconName="heroicons:user"
              iconSize={"1.5em"}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
