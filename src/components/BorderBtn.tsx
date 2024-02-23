import { Icon } from "@iconify/react";
import {
  FunctionComponent,
  MouseEventHandler,
} from "react";
import { twMerge } from "tailwind-merge";
interface BorderBtnProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  onclick?: MouseEventHandler<HTMLButtonElement>;
  badgeText?: string;
  iconName?: string;
  iconSize?: string;
}

const BorderBtn: FunctionComponent<BorderBtnProps> = ({
  className,
  children,
  onclick,
  badgeText,
  iconName = "mdi-light:home",
  iconSize,
}) => {
  return (
    <>
      <button
        onClick={onclick}
        className={twMerge(
          "flex gap-3 items-center font-semibold text-lg border rounded-full px-4 py-2 hover:bg-gray-100 duration-200",
          className
        )}
      >
        <Icon icon={iconName} fontSize={iconSize} />
        {children}
        {badgeText && (
          <span className="ml-auto text-sm font-semibold bg-gray-200 text-black px-1.5 rounded-lg">
            {badgeText}
          </span>
        )}
      </button>
    </>
  );
};

export default BorderBtn;
