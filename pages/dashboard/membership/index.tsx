import Layout from "@/components/dashboard/dashboard-layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-[#041635] font-semibold text-5xl">Membership</h1>

      {/* Account details */}
      <div className="flex flex-col gap-6">
        <p className="text-[#666666] text-lg font-medium">Account details</p>
        <div className="flex flex-col border border-[#CBD5E1] rounded-lg p-6 w-full max-w-[800px]">
          <p className="text-[#041635] font-semibold text-xl">Premium plan</p>
          <p className="text-[#666666] text-lg">
            4k video resolution with spatial audio, ad-free watching and more
          </p>
          <Link
            href="#"
            className="flex justify-between items-center text-[#041635] font-semibold text-lg mt-4"
          >
            Change plan
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Payment info */}
      <div className="flex flex-col gap-6">
        <p className="text-[#666666] text-lg font-medium">Payment info</p>
        <div className="flex flex-col border border-[#CBD5E1] rounded-lg p-6 w-full max-w-[800px]">
          <p className="text-[#041635] font-semibold text-xl">Premium plan</p>
          <p className="text-[#666666] text-lg">
            4k video resolution with spatial audio, ad-free watching and more
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img src="/assets/master.svg" alt="Mastercard" className="w-10 h-10" />
            <span className="text-black text-lg">**** **** **** 5643</span>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="#"
              className="flex justify-between items-center text-[#041635] font-semibold text-lg"
            >
              Manage Payment Method
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="flex justify-between items-center text-[#041635] font-semibold text-lg"
            >
              Redeem gift or promo code
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="flex justify-between items-center text-[#041635] font-semibold text-lg"
            >
              View payment history
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Cancel Membership */}
      <div className="flex justify-center mt-8">
        <button className="text-[#E74C3C] font-semibold text-lg border border-[#E74C3C] rounded-lg py-2 px-6">
          Cancel Membership
        </button>
      </div>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
