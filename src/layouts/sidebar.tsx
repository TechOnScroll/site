import BorderBtn from "@/components/BorderBtn";
import CategoryTag from "@/components/CategoryTag";
import { FunctionComponent } from "react";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const categoryTag = [
    {
      categoryName: "Tech",
      categoryLink: "/category/tech",
      tagList: [
        {
          name: "Crypto",
          link: "/tag/crypto",
          className: "bg-green-500",
        },
        {
          name: "Hardware",
          link: "/tag/hardware",
          className: "bg-yellow-500",
        },
        {
          name: "Software",
          link: "/tag/crypto",
          className: "bg-blue-500",
        },
      ],
    },
    {
      categoryName: "Space",
      categoryLink: "/category/space",
      tagList: [
        {
          name: "ISRO",
          link: "/tag/crypto",
          className: "bg-orange-500",
        },
        {
          name: "NASA",
          link: "/tag/hardware",
          className: "bg-gray-700",
        },
        {
          name: "Satelites",
          link: "/tag/crypto",
          className: "bg-purple-500",
        },
      ],
    },
  ];
  return (
    <>
      <aside className="pl-5 max-w-[280px] pt-28 h-full fixed w-full">
        <div className="flex flex-col gap-4 mb-10">
          <BorderBtn
            iconName="heroicons:star-solid"
            iconSize="1.35em"
            className="text-blue-500"
            badgeText="10+"
          >
            <div className="text-black">Featured</div>
          </BorderBtn>
          <BorderBtn
            iconName="heroicons:bolt-solid"
            iconSize="1.35em"
            className="text-yellow-500"
            badgeText="10+"
          >
            <div className="text-black">Trending</div>
          </BorderBtn>
          <BorderBtn
            iconName="heroicons:rectangle-stack-solid"
            iconSize="1.35em"
            className="text-green-500"
            badgeText="10+"
          >
            <div className="text-black">Categories</div>
          </BorderBtn>
        </div>
        {categoryTag.map((category) => (
          <CategoryTag {...category} className="mb-10" />
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
