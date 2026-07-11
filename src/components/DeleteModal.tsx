import { ShieldAlert, X } from "lucide-react";
import { useMailStore } from "@/store/useMailStore";

export default function DeleteModal() {
  const { deleteModalOpen, setDeleteModalOpen } = useMailStore();

  if (!deleteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-olive/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setDeleteModalOpen(false)}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative w-full max-w-md bg-parchment dark:bg-combat-card border border-gold dark:border-combat-gold rounded-lg shadow-paper dark:shadow-none p-6 animate-fade-in-up">
        <button
          type="button"
          onClick={() => setDeleteModalOpen(false)}
          className="absolute top-3 right-3 text-charcoal-light dark:text-combat-muted hover:text-charcoal dark:hover:text-combat-text transition-colors"
          aria-label="关闭"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 rounded-full bg-alert/10 dark:bg-combat-alert/20 text-alert dark:text-combat-alert">
            <ShieldAlert size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-serif-cn text-lg text-charcoal dark:text-combat-text mb-2">
              学院指令
            </h3>
            <p className="text-sm text-charcoal dark:text-combat-text leading-relaxed mb-1">
              一切情报痕迹不得清除，仅可存档。
            </p>
            <p className="text-xs text-charcoal-light dark:text-combat-muted">
              All intelligence traces must be preserved; archival only.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setDeleteModalOpen(false)}
            className="px-4 py-2 text-sm text-charcoal-light dark:text-combat-muted hover:text-charcoal dark:hover:text-combat-text transition-colors"
          >
            取消
          </button>
          <button
            type="button"
            onClick={() => setDeleteModalOpen(false)}
            className="px-4 py-2 text-sm rounded-md bg-olive dark:bg-combat-olive text-white dark:text-combat-text hover:bg-olive-dark dark:hover:bg-combat-gold/80 transition-colors"
          >
            我知道了
          </button>
        </div>
      </div>
    </div>
  );
}
