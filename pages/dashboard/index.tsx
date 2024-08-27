import Layout from "@/components/dashboard/dashboard-layout/Layout";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { quickLinks } from "@/data/quicklinks";
import QuickLinkItem from "@/components/dashboard/overview/Quicklinks";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex-col font-poppins flex gap-20 mt-40">
      <h1 className="text-[#041635] font-semibold text-5xl">Accounts</h1>
      {/* Membership card */}
      <div className="flex flex-col gap-2 mt-6">
        <p className="text-primary text-lg">Membership Details</p>
        <div className="flex flex-col gap-3 border border-[#CBD5E1] rounded-lg py-6 w-[806px]">
          <div className="bg-[#082563] w-[444px] h-[76px] rounded-r-full"></div>
          <p className="text-[#041635] font-semibold text-xl pl-5">Premium plan</p>
          <p className="text-primary text-lg pl-5">Next payment: 8 August 2024</p>
          <div className="flex items-center gap-6 pl-5">
            <img src="/assets/master.svg" alt="card-logo" />
            <span className="text-black text-lg">**** **** **** 5643</span>
          </div>
          <Link
            href="/dashboard/membership"
            className="text-[#041635] font-semibold text-xl  border-t mx-5 mt-5 border-[#CBD5E1] pt-5"
          >
            Manage membership{" "}
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg">Quick Links</p>
        <div className="flex flex-col gap-3 border border-[#CBD5E1] rounded-lg p-4 w-[806px]">
          {quickLinks.map((link, index) => (
            <QuickLinkItem key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
