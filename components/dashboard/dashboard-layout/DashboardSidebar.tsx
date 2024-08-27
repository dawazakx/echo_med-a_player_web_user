import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardLinks, IDashboardLink } from "./DashboardLinks";

const ParentLinkComponent = ({
  link,
  isActive,
}: {
  link: IDashboardLink;
  isActive: boolean;
}) => {
  return (
    <div className="flex gap-6 items-center">
      <link.icon
        width={18}
        className={isActive ? "text-[#FB765F] text-lg" : "text-white text-lg"}
      />
      <span
        className={`font-semibold text-[15px] ${
          isActive ? "text-[#FB765F] text-lg" : "text-white text-lg"
        }`}
      >
        {link.title}
      </span>
    </div>
  );
};

const DashboardSidebar = () => {
  const router = useRouter();

  return (
    <aside className="bg-primary w-[344px] text-white p-4 sticky z-30 top-0 h-screen">
      <div className="flex items-center flex-col gap-2 mb-20">
        <img src="/assets/dashLogo.svg" alt="logo" />
        <p className="text-white text-center text-xl">Eco Media Player</p>
      </div>
      <div className="flex flex-col font-poppins gap-8 pl-5 text-xl ">
        {DashboardLinks.map((link) => {
          const isCurrentPath = router.pathname === link.url;
          return (
            <Link
              key={link.url}
              className="flex p-2 py-[12px] pl-4 rounded-lg items-center"
              href={link.url}
            >
              <ParentLinkComponent link={link} isActive={isCurrentPath} />
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
