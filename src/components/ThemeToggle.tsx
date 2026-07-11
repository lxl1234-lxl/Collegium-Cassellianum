import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme, isCombat } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isCombat ? "切换至学院主题" : "切换至作战主题"}
      title={isCombat ? "切换至学院主题" : "切换至作战主题"}
      className="fixed left-4 bottom-28 lg:bottom-9 z-40 flex items-center gap-2 px-3 py-2 rounded-full border border-gold/40 dark:border-combat-gold/40 bg-parchment/80 dark:bg-combat-olive/60 text-olive dark:text-combat-gold shadow-paper dark:shadow-none backdrop-blur-sm hover:border-gold dark:hover:border-combat-gold hover:bg-parchment-dark dark:hover:bg-combat-olive transition-all duration-300"
    >
      {isCombat ? (
        <Moon size={16} strokeWidth={1.5} />
      ) : (
        <Sun size={16} strokeWidth={1.5} />
      )}
      <span className="text-xs font-serif-cn hidden sm:inline">
        {isCombat ? "作战" : "学院"}
      </span>
    </button>
  );
}
