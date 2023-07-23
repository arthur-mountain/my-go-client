'use client';
import { useSelectedLayoutSegments } from "next/navigation";
import useClientAuth from "@/hooks/useClientAuth";
import Breadcrumb from "@/components/Breadcrumb";

import AdminHeaderLayout from "./AdminHeader"
import AdminSidebarLayout from "./AdminSidebar"
import AdminFooterLayout from "./AdminFooter"

function AdminLayout({ children }) {
  const breadcrumbs = useSelectedLayoutSegments()
  const {
    store: { isShowChildren, stateErrMsg },
    action: { handleLogout }
  } = useClientAuth();

  return (
    <>
      <AdminHeaderLayout handleLogout={handleLogout} />
      <section className="flex">
        <AdminSidebarLayout />

        <section className="grow bg-black">
          <Breadcrumb breadcrumbs={["home", ...breadcrumbs]} />

          <main className="p-6 pb-96 text-white">
            <div className="text-red-900 text-center text-7xl mb-12">
              {stateErrMsg}
            </div>
            {isShowChildren && children}
          </main>

          <AdminFooterLayout />
        </section>
      </section>
    </>
  );
}

export default AdminLayout;