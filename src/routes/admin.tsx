import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AppShell as AdminShell } from "@/modules/admin/components/app/AppShell";
import { StoreProvider } from "@/modules/admin/lib/store";
import { Toaster } from "@/modules/admin/components/ui/sonner";
import { pageHead } from "@/modules/admin/lib/seo";
export const Route = createFileRoute("/admin")({
 head: pageHead("Administration", "Manage school administration, students, fees, attendance and examinations."),
 component: AdminLayout,
});
function AdminLayout() { return <AppShell title="Admin"><div className="admin-module"><StoreProvider><AdminShell><Outlet /></AdminShell><Toaster richColors position="top-right" /></StoreProvider></div></AppShell>; }
