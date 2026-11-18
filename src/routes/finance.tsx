import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AppShell as FinanceShell } from "@/modules/finance/components/finance/AppShell";
import { FinanceProvider } from "@/modules/finance/finance/store";
import { RecordPaymentProvider } from "@/modules/finance/components/finance/RecordPaymentProvider";
import { Toaster } from "@/modules/finance/components/ui/sonner";
import { pageHead } from "@/modules/finance/lib/seo";
export const Route = createFileRoute("/finance")({
 head: pageHead("Finance", "Manage school fees, payments, budgets, ledgers and financial reports."),
 component: FinanceLayout,
});
function FinanceLayout() {
 return <AppShell title="Finance"><div className="finance-module"><FinanceProvider><RecordPaymentProvider><FinanceShell><Outlet /></FinanceShell><Toaster richColors position="top-right" /></RecordPaymentProvider></FinanceProvider></div></AppShell>;
}
