import { Users, Star } from "lucide-react";
import { departments, contacts } from "@/data/mailData";
import { useMailStore } from "@/store/useMailStore";

export default function ContactList() {
  const { selectedContactId, selectedFolderId, starredIds, setSelectedContact } = useMailStore();

  const displayedContacts =
    selectedFolderId === "important"
      ? contacts.filter((c) => starredIds.includes(c.id))
      : contacts;

  const isImportantFolder = selectedFolderId === "important";

  return (
    <div className="flex flex-col h-full py-5 px-4">
      <div className="flex items-center justify-between mb-4 px-2 text-olive dark:text-combat-gold">
        <div className="flex items-center gap-2">
          {isImportantFolder ? <Star size={18} strokeWidth={1.5} /> : <Users size={18} strokeWidth={1.5} />}
          <span className="font-serif-cn text-base">{isImportantFolder ? "重要联系人" : "联系人"}</span>
        </div>
        <button
          type="button"
          className="p-1.5 hover:bg-olive/10 dark:hover:bg-combat-olive/40 rounded transition-colors"
          aria-label="联系人菜单"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      {/* Department tags - hidden in important folder */}
      {!isImportantFolder && (
        <div className="flex flex-wrap gap-2 mb-5 px-1">
          {departments.map((dept) => (
            <span
              key={dept.id}
              className="px-2.5 py-1 text-xs border border-gold/60 dark:border-combat-gold/60 text-olive dark:text-combat-gold rounded-full bg-parchment-dark/40 dark:bg-combat-olive/30"
            >
              {dept.label}
            </span>
          ))}
        </div>
      )}

      {/* Contact list */}
      <ul className="flex flex-col gap-1 overflow-y-auto flex-1">
        {displayedContacts.length === 0 ? (
          <li className="px-3 py-8 text-center text-charcoal-light dark:text-combat-muted text-sm">
            {isImportantFolder ? "暂无重要邮件，点击标记按钮添加。" : "暂无联系人"}
          </li>
        ) : (
          displayedContacts.map((contact) => {
            const isActive = selectedContactId === contact.id;
            return (
              <li key={contact.id}>
                <button
                  type="button"
                  onClick={() => setSelectedContact(contact.id)}
                  className={`w-full flex items-start gap-3 px-3 py-3 rounded-md text-left transition-all duration-200 ${
                    isActive
                      ? "bg-olive dark:bg-combat-olive text-white dark:text-combat-text"
                      : "text-charcoal dark:text-combat-text hover:bg-olive/10 dark:hover:bg-combat-olive/40 hover:text-olive dark:hover:text-combat-gold"
                  }`}
                >
                  <span
                    className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${
                      isActive
                        ? contact.id === "eva" ? "bg-alert dark:bg-combat-alert" : "bg-gold dark:bg-combat-gold"
                        : contact.id === "eva" ? "bg-alert/70 dark:bg-combat-alert/70" : "bg-gold/50 dark:bg-combat-gold/50"
                    }`}
                  />
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium truncate">{contact.name}</span>
                      {starredIds.includes(contact.id) && (
                        <Star size={12} strokeWidth={2} className="text-gold dark:text-combat-gold flex-shrink-0 ml-1" />
                      )}
                    </div>
                    <span className={`text-xs truncate ${isActive ? "text-white/80 dark:text-combat-text/80" : "text-charcoal-light dark:text-combat-muted"}`}>
                      {contact.preview}
                    </span>
                  </div>
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
