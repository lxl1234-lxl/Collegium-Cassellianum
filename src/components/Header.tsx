import { Search, SquarePen, Menu } from "lucide-react";
import SealLogo from "./SealLogo";
import { useMailStore } from "@/store/useMailStore";

export default function Header() {
  const { toggleDrawer } = useMailStore();

  return (
    <header className="relative z-20 flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8 border-b border-gold dark:border-combat-gold bg-parchment dark:bg-void-black transition-colors duration-400">
      <div className="flex items-center gap-3 lg:gap-5">
        <button
          type="button"
          onClick={toggleDrawer}
          className="lg:hidden p-2 -ml-2 text-olive dark:text-combat-gold hover:text-gold dark:hover:text-combat-text transition-colors duration-200"
          aria-label="打开菜单"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
        <SealLogo size={56} className="lg:hidden" />
        <SealLogo size={72} className="hidden lg:block" />
        <div className="flex flex-col justify-center">
          <h1 className="font-title text-lg lg:text-2xl tracking-widest text-olive dark:text-combat-gold leading-tight">
            CASSELL COLLEGE
          </h1>
          <div className="flex items-center gap-2 text-gold dark:text-combat-muted text-xs lg:text-sm">
            <span className="hidden lg:inline-block w-6 h-px bg-gold dark:bg-combat-gold" />
            <span className="font-serif-cn">守夜人社区</span>
            <span className="hidden lg:inline-block w-6 h-px bg-gold dark:bg-combat-gold" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-5 text-olive dark:text-combat-gold">
        <button
          type="button"
          className="p-2 hover:text-gold dark:hover:text-combat-text hover:bg-olive/5 dark:hover:bg-combat-olive/50 rounded-full transition-all duration-200"
          aria-label="搜索"
        >
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          className="p-2 hover:text-gold dark:hover:text-combat-text hover:bg-olive/5 dark:hover:bg-combat-olive/50 rounded-full transition-all duration-200"
          aria-label="新建邮件"
        >
          <SquarePen size={20} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
