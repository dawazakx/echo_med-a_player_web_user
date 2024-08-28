import Layout from "@/components/dashboard/dashboard-layout/Layout";
import PaymentItem from "@/components/dashboard/security/PaymentCard";
import { paymentLinks } from "@/data/paymentLinks";
import { NextPageWithLayout } from "@/pages/_app";
import { ChevronRight, Mail, Smartphone } from "lucide-react";
import { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex-col font-poppins flex gap-20 mt-40">
      <h1 className="text-[#041635] font-semibold text-5xl">Security</h1>
      {/* plan details */}
      <div className="flex flex-col gap-2 mt-6">
        <p className="text-primary text-lg">Plan details</p>
        <div className="flex flex-col gap-3 border border-[#CBD5E1] rounded-lg p-4 w-[806px]">
          {/* update password */}
          <div className="flex items-center justify-between border-b cursor-pointer border-[#CBD5E1] pb-6">
            <div className="flex gap-3 items-center">
              <img src="/icons/password.svg" alt="icon" />
              <span className="text-primary font-medium text-lg">Update password</span>
            </div>
            <ChevronRight className="text-primary" />
          </div>
          {/* Mail */}
          <div className="flex items-center justify-between border-b cursor-pointer border-[#CBD5E1] pb-6">
            <div className="flex gap-3 items-center">
              <Mail className="text-[#082563]" />
              <div className="flex flex-col items-start">
                <span className="text-primary font-semibold text-lg">Email</span>
                <p className="text-primary pt-1 text-lg">olayemijoshua17@gmail.com</p>
                <p className="text-[#EB001B] text-lg">Needs verification</p>
              </div>
            </div>
            <ChevronRight className="text-primary" />
          </div>
          {/* Mobile Phone */}
          <div className="flex items-center justify-between cursor-pointer  pb-6">
            <div className="flex gap-3 items-center">
              <Smartphone className="text-[#082563]" />
              <div className="flex flex-col items-start">
                <span className="text-primary font-semibold text-lg">Mobile phone</span>
                <p className="text-primary pt-1 text-lg">09056272624</p>
              </div>
            </div>
            <ChevronRight className="text-primary" />
          </div>
        </div>
      </div>

      {/* payment info */}
      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg">Payment info</p>
        <div className="flex flex-col gap-3 border border-[#CBD5E1] rounded-lg p-4 w-[806px]">
          {paymentLinks.map((link, index) => (
            <PaymentItem key={index} {...link} />
          ))}
        </div>
      </div>

      <button className="grid place-items-center text-center border border-[#CBD5E1] rounded-lg p-4 w-[806px]">
        <span className="text-[#EB001B] font-medium text-xl">Delete Account</span>
      </button>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
