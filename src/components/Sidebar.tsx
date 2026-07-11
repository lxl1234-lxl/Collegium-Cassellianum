import { Mail, Star, Send, Archive } from "lucide-react";
import { mailFolders } from "@/data/mailData";
import { useMailStore } from "@/store/useMailStore";

const iconMap = {
  Mail,
  Star,
  Send,
  Archive,
};

interface SidebarProps {
  compact?: boolean;
}

export default function Sidebar({ compact = false }: SidebarProps) {
  const { selectedFolderId, setSelectedFolder, starredIds } = useMailStore();

  const getFolderBadge = (folderId: string) => {
    if (folderId === "inbox") {
      return mailFolders.find((f) => f.id === "inbox")?.unread ?? 0;
    }
    if (folderId === "important") {
      return starredIds.length;
    }
    return 0;
  };

  return (
    <nav className={`flex flex-col ${compact ? "py-3 px-2" : "py-5 px-4"}`}>
      <div className={`flex items-center ${compact ? "justify-center mb-4" : "gap-3 mb-5 px-2"} text-olive dark:text-combat-gold`}>
        <Mail size={compact ? 20 : 18} strokeWidth={1.5} />
        {!compact && <span className="font-serif-cn text-base">邮件</span>}
      </div>

      <ul className="flex flex-col gap-1">
        {mailFolders.map((folder) => {
          const Icon = iconMap[folder.icon];
          const isActive = selectedFolderId === folder.id;
          const badge = getFolderBadge(folder.id);
          return (
            <li key={folder.id}>
              <button
                type="button"
                onClick={() => setSelectedFolder(folder.id)}
                className={`w-full flex items-center ${compact ? "justify-center px-2 py-3" : "justify-between px-3 py-2.5"} rounded-md transition-all duration-200 group ${
                  isActive
                    ? "bg-olive dark:bg-combat-olive text-white dark:text-combat-text"
                    : "text-charcoal dark:text-combat-text hover:bg-olive/10 dark:hover:bg-combat-olive/40 hover:text-olive dark:hover:text-combat-gold"
                }`}
              >
                <div className={`flex items-center ${compact ? "" : "gap-3"}`}>
                  <Icon size={compact ? 20 : 18} strokeWidth={1.5} />
                  {!compact && <span className="text-sm">{folder.label}</span>}
                </div>
                {!compact && badge > 0 ? (
                  <span
                    className={`text-xs min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full ${
                      folder.id === "important"
                        ? "bg-gold dark:bg-combat-gold text-olive dark:text-combat-olive"
                        : isActive
                        ? "bg-alert dark:bg-combat-alert text-white dark:text-combat-text"
                        : "bg-alert/85 dark:bg-combat-alert text-white dark:text-combat-text"
                    }`}
                  >
                    {badge}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
