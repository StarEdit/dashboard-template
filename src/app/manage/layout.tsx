import { AppSidebar } from "@/components/app-sidebar";
import DashboardHeader from "@/components/dashboard-header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <section className="flex items-center gap-2">
          <SidebarTrigger />
          <DashboardHeader />
        </section>
        <section className="p-2 flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
