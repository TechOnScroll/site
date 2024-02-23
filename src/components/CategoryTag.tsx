import Link from "next/link";
import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";

interface CategoryTagProps {
  className?: string;
  categoryName?: string;
  categoryLink?: string;
  tagList: {
    name: string;
    link: string;
    className?: string;
  }[];
}

const CategoryTag: FunctionComponent<CategoryTagProps> = ({
  className,
  categoryLink = "#",
  categoryName = "Category",
  tagList,
}) => {
  return (
    <>
      <div className={twMerge("", className)}>
        <h2 className="mb-2 text-2xl">
          in /
          <Link href={categoryLink} className="font-bold">
            {categoryName}
          </Link>
        </h2>
        <div className="flex flex-col gap-3">
          {tagList.map((tag) => (
            <>
              <Link href={tag.link} className="w-fit">
                <span
                  className={twMerge(
                    "px-4 py-1 bg-black text-white rounded font-semibold text-lg",
                    tag.className
                  )}
                >
                  #{tag.name}
                </span>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryTag;
