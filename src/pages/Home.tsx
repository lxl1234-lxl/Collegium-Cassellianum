import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContactList from "@/components/ContactList";
import MailDetail from "@/components/MailDetail";
import MobileTabBar from "@/components/MobileTabBar";
import MobileDrawer from "@/components/MobileDrawer";
import WorldTreeWatermark from "@/components/WorldTreeWatermark";
import ScrollVine from "@/components/ScrollVine";
import ThemeToggle from "@/components/ThemeToggle";
import DeleteModal from "@/components/DeleteModal";
import { motto } from "@/data/mailData";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col parchment-bg overflow-hidden">
      {/* Background layers */}
      <WorldTreeWatermark />
      <ScrollVine className="hidden lg:block fixed bottom-0 left-0 w-48 h-48 pointer-events-none z-[2] opacity-40" />
      <ScrollVine className="hidden lg:block fixed top-24 right-0 w-40 h-40 pointer-events-none z-[2] opacity-30 rotate-180" />

      <Header />

      {/* Main layout */}
      <main className="relative z-10 flex flex-1 overflow-hidden">
        {/* PC Sidebar */}
        <aside className="hidden lg:flex flex-col w-[200px] border-r border-gold dark:border-combat-gold bg-parchment/70 dark:bg-void-black/80">
          <Sidebar />
        </aside>

        {/* PC Contacts */}
        <aside className="hidden lg:flex flex-col w-[260px] border-r border-gold dark:border-combat-gold bg-parchment/70 dark:bg-void-black/80">
          <ContactList />
        </aside>

        {/* Mail detail - full width on mobile, flex-1 on PC */}
        <section className="flex-1 min-w-0 bg-parchment/50 dark:bg-combat-card/60">
          <MailDetail />
        </section>
      </main>

      {/* PC footer motto */}
      <footer className="hidden lg:flex items-center justify-end px-6 py-1.5 border-t border-gold dark:border-combat-gold bg-parchment/80 dark:bg-void-black/90 z-20 transition-colors duration-400">
        <span className="text-[10px] text-gold/50 dark:text-combat-gold/50 tracking-[0.2em] uppercase font-serif">
          {motto}
        </span>
      </footer>

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Delete modal */}
      <DeleteModal />

      {/* Mobile drawer */}
      <MobileDrawer />

      {/* Mobile tab bar */}
      <MobileTabBar />

      {/* Mobile bottom safe area spacer */}
      <div className="lg:hidden h-16" />
    </div>
  );
}
