import Layout from "@/components/dashboard/dashboard-layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex-col font-poppins flex gap-20 mt-40">
      <h1 className="text-[#041635] font-semibold text-5xl">Devices</h1>
      
      {/* Account Access */}
      <div className="flex flex-col gap-2 mt-6">
        <p className="text-primary text-lg">Account access</p>
        <div className="flex flex-col gap-3 border border-[#CBD5E1] rounded-lg py-6 w-[806px]">
          <div className="flex items-center gap-6 pl-5">
            <img src="/assets/devices-icon.svg" alt="devices-icon" className="w-6 h-6"/>
            <div className="flex flex-col flex-grow">
              <p className="text-[#041635] font-semibold text-xl">Access and devices</p>
              <p className="text-primary text-lg">Manage signed-in devices</p>
            </div>
            <ChevronRight className="text-primary w-6 h-6"/>
          </div>
        </div>
      </div>

      {/* Mobile Download */}
      <div className="flex flex-col gap-2 mt-6">
        <p className="text-primary text-lg">Mobile download</p>
        <div className="flex flex-col gap-3 border border-[#CBD5E1] rounded-lg py-6 w-[806px]">
          <div className="flex items-center gap-6 pl-5">
            <img src="/assets/mobile-download-icon.svg" alt="mobile-download-icon" className="w-6 h-6"/>
            <div className="flex flex-col flex-grow">
              <p className="text-[#041635] font-semibold text-xl">Mobile Download devices</p>
              <p className="text-primary text-lg">Using 4 of 6 download devices</p>
            </div>
            <ChevronRight className="text-primary w-6 h-6"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
