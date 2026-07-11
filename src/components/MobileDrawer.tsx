import Sidebar from "./Sidebar";
import ContactList from "./ContactList";
import { useMailStore } from "@/store/useMailStore";

export default function MobileDrawer() {
  const { drawerOpen, setDrawerOpen } = useMailStore();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-olive/30 dark:bg-black/60 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`lg:hidden fixed top-16 left-0 bottom-0 z-50 w-[280px] bg-parchment dark:bg-combat-card border-r border-gold dark:border-combat-gold shadow-paper dark:shadow-none transition-transform duration-300 ease-cassell ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="侧边菜单"
      >
        <div className="h-full overflow-y-auto">
          <Sidebar />
          <div className="border-t border-gold/60 dark:border-combat-gold/60">
            <ContactList />
          </div>
        </div>
      </aside>
    </>
  );
}
