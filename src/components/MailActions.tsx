import { Star, Trash2, Reply, MoreHorizontal } from "lucide-react";
import { useMailStore } from "@/store/useMailStore";

export default function MailActions() {
  const {
    selectedContactId,
    replyMode,
    isStarred,
    toggleStar,
    setReplyMode,
    setDeleteModalOpen,
  } = useMailStore();

  const starred = isStarred(selectedContactId);

  return (
    <div className="flex items-center justify-around lg:justify-start lg:gap-10 px-4 py-3 lg:px-10 lg:py-4 border-t border-gold/60 dark:border-combat-gold/60 bg-parchment dark:bg-void-black transition-colors duration-400">
      <button
        type="button"
        onClick={() => toggleStar(selectedContactId)}
        className={`group flex flex-col items-center gap-1 transition-all duration-200 ${
          starred
            ? "text-gold dark:text-combat-gold"
            : "text-olive dark:text-combat-gold hover:text-gold dark:hover:text-combat-text"
        }`}
        aria-label={starred ? "取消标记" : "标记为重要"}
      >
        <Star
          size={22}
          strokeWidth={1.5}
          className={`group-hover:-translate-y-0.5 transition-transform duration-200 ${
            starred ? "fill-gold dark:fill-combat-gold" : ""
          }`}
        />
        <span className="text-xs">{starred ? "已标记" : "标记"}</span>
      </button>

      <button
        type="button"
        onClick={() => setDeleteModalOpen(true)}
        className="group flex flex-col items-center gap-1 text-olive dark:text-combat-gold hover:text-gold dark:hover:text-combat-text transition-all duration-200"
        aria-label="删除"
      >
        <Trash2
          size={22}
          strokeWidth={1.5}
          className="group-hover:-translate-y-0.5 transition-transform duration-200"
        />
        <span className="text-xs">删除</span>
      </button>

      <button
        type="button"
        onClick={() => setReplyMode(!replyMode)}
        className={`group flex flex-col items-center gap-1 transition-all duration-200 ${
          replyMode
            ? "text-gold dark:text-combat-gold"
            : "text-olive dark:text-combat-gold hover:text-gold dark:hover:text-combat-text"
        }`}
        aria-label="回复"
      >
        <Reply
          size={22}
          strokeWidth={1.5}
          className="group-hover:-translate-y-0.5 transition-transform duration-200"
        />
        <span className="text-xs">{replyMode ? "取消回复" : "回复"}</span>
      </button>

      <button
        type="button"
        className="group flex flex-col items-center gap-1 text-olive dark:text-combat-gold hover:text-gold dark:hover:text-combat-text transition-all duration-200"
        aria-label="更多"
      >
        <MoreHorizontal
          size={22}
          strokeWidth={1.5}
          className="group-hover:-translate-y-0.5 transition-transform duration-200"
        />
        <span className="text-xs">更多</span>
      </button>
    </div>
  );
}
