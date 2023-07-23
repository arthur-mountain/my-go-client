'use client';
import { useSelectedLayoutSegments } from "next/navigation";
import useClientAuth, { AuthContext } from "@/hooks/useClientAuth";
import Breadcrumb from "@/components/Breadcrumb";
// import { AUTH_STATUS, WHITE_LIST } from "@/constants/common";

import AdminHeaderLayout from "./AdminHeader";
import AdminSidebarLayout from "./AdminSidebar";
import AdminFooterLayout from "./AdminFooter";

type Props = React.PropsWithChildren;

function AdminLayout({ children }: Props) {
  const breadcrumbs = useSelectedLayoutSegments()
  const { store, actions } = useClientAuth();
  const { error } = store;
  const { handleLogout } = actions;

  return (
    <>
      <AdminHeaderLayout handleLogout={handleLogout} />
      <section className="flex">
        <AdminSidebarLayout />

        <section className="grow bg-black">
          <Breadcrumb breadcrumbs={["home", ...breadcrumbs]} />

          <main className="p-6 pb-96 text-white">
            <div className="text-red-900 text-center text-7xl mb-12">
              {error.message}
            </div>
            {!error.message && (
              <AuthContext.Provider value={{ store, actions }}>
                {children}
              </AuthContext.Provider>
            )}
          </main>

          <AdminFooterLayout />
        </section>
      </section>
    </>
  );
}

export default AdminLayout;