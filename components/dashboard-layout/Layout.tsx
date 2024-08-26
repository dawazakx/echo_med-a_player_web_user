import { ReactNode, useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { cn } from "@/lib/utils";
import { inter } from "@/pages/_app";

const Layout = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className="flex bg-white flex-auto flex-col">
      <div className="flex gap-10  flex-auto min-w-0">
      <DashboardSidebar />

      <div className="flex mb-12 flex-col flex-auto overflow-y-auto min-h-screen min-w-0 relative w-full ">
        <main className={cn("pr-4 py-4 flex-1 h-full grow", inter.className)}>{children}</main>
      </div>
      </div>
    </div>
  );
};

export default Layout;
