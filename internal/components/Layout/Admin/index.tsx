'use client';
import { useSelectedLayoutSegments } from "next/navigation";
import useClientAuth, { AuthContext } from "@/hooks/useClientAuth";
import Breadcrumb from "@/components/Breadcrumb";

import AdminNavbarLayout from "./AdminHeader";
import AdminSidebarLayout from "./AdminSidebar";
import AdminFooterLayout from "./AdminFooter";

type Props = React.PropsWithChildren;

const headerHeight = '70px'
function AdminLayout({ children }: Props) {
  const breadcrumbs = useSelectedLayoutSegments()
  const { store, actions } = useClientAuth();
  const { error } = store;
  const { handleLogout } = actions;

  return (
    <>
      <header className={`h-[${headerHeight}]`}>
        <AdminNavbarLayout handleLogout={handleLogout} />
      </header>
      <section className={`flex min-h-[calc(100vh-${headerHeight})]`}>
        <AdminSidebarLayout />

        <section className="grow flex flex-col">
          <Breadcrumb breadcrumbs={["home", ...breadcrumbs]} />

          <main className="grow p-6 text-white">
            {error.message ? (
              <div className="text-red-900 text-center text-7xl mb-12">
                {error.message}
              </div>
            ) : (
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