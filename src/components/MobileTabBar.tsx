import { Home, UsersRound, Mail, ClipboardList, Settings } from "lucide-react";
import { useMailStore } from "@/store/useMailStore";

const tabs = [
  { id: "home", label: "首页", icon: Home },
  { id: "contacts", label: "通讯录", icon: UsersRound },
  { id: "mail", label: "邮件", icon: Mail, badge: 1 },
  { id: "tasks", label: "任务", icon: ClipboardList },
  { id: "settings", label: "设置", icon: Settings },
];

export default function MobileTabBar() {
  const { selectedFolderId, setSelectedFolder } = useMailStore();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 h-16 bg-parchment dark:bg-void-black border-t border-gold dark:border-combat-gold transition-colors duration-400">
      <ul className="flex items-center justify-around h-full px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === "mail" && selectedFolderId === "inbox";
          return (
            <li key={tab.id} className="flex-1">
              <button
                type="button"
                onClick={() => tab.id === "mail" && setSelectedFolder("inbox")}
                className={`relative w-full flex flex-col items-center gap-0.5 py-1.5 transition-colors duration-200 ${
                  isActive ? "text-olive dark:text-combat-gold" : "text-charcoal-light dark:text-combat-muted hover:text-olive dark:hover:text-combat-gold"
                }`}
              >
                <div className="relative">
                  <Icon size={22} strokeWidth={1.5} />
                  {tab.badge ? (
                    <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 flex items-center justify-center text-[10px] bg-alert dark:bg-combat-alert text-white rounded-full">
                      {tab.badge}
                    </span>
                  ) : null}
                </div>
                <span className="text-[10px]">{tab.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
