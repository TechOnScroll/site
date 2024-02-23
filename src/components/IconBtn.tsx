import { Icon } from "@iconify/react";
import {
  FunctionComponent,
  MouseEventHandler,
} from "react";
import { twMerge } from "tailwind-merge";
interface IconBTNProps {
  className?: string;
  iconName?: string;
  iconSize?: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
}

const IconBTN: FunctionComponent<IconBTNProps> = ({
  className,
  iconName = "mdi-light:home",
  iconSize = "1em",
}) => {
  return (
    <>
      <button
        className={twMerge(
          "bg-gray-200 hover:bg-gray-100 duration-200 cursor-pointer active:shadow-inner w-11 h-11 text-lg flex items-center justify-center rounded-[20px]",
          className
        )}
      >
        <Icon icon={iconName} fontSize={iconSize} />
      </button>
    </>
  );
};

export default IconBTN;
