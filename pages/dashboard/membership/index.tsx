import Layout from "@/components/dashboard/dashboard-layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex-col flex gap-6">
      <h1 className="text-black">Membership Page</h1>
      <p className="text-red-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti facere quis quo
        veniam, non pariatur odio? Veritatis reiciendis quasi rem autem iste vero sunt est
        blanditiis! Dolorem, perspiciatis similique.
      </p>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
