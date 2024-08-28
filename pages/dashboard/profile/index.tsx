import Layout from "@/components/dashboard/dashboard-layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ChevronRight } from "lucide-react";
import { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex-col font-poppins flex gap-20 mt-40">
      <h1 className="text-[#041635] font-semibold text-5xl">Devices</h1>

      <div className="flex flex-col gap-2 mt-6">
        <p className="text-primary text-lg">Plan details</p>
        <div className="flex flex-col gap-3 border border-[#CBD5E1] rounded-lg p-4 w-[806px]">
          {/* parental control */}
          <div className="flex border-b border-[#CBD5E1] items-center justify-between cursor-pointer  pb-6">
            <div className="flex gap-3 items-center">
              <img src="/icons/password.svg" alt="icon" />
              <div className="flex flex-col items-start">
                <span className="text-primary font-semibold text-lg">
                  Adjust parental control
                </span>
                <p className="text-primary pt-1 text-lg">
                  Set maturity rating and block titles
                </p>
              </div>
            </div>
            <ChevronRight className="text-primary" />
          </div>

          {/* Transfer Profile */}
          <div className="flex  items-center justify-between cursor-pointer  pb-6">
            <div className="flex gap-3 items-center">
              <img src="/icons/profile.svg" alt="icon" />
              <div className="flex flex-col items-start">
                <span className="text-primary font-semibold text-lg">Transfer a profile</span>
                <p className="text-primary pt-1 text-lg">Copy a profile to another account</p>
              </div>
            </div>
            <ChevronRight className="text-primary" />
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
