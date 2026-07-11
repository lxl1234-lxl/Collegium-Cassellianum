import { ChevronLeft, ChevronUp, ChevronDown, AlertTriangle, Send } from "lucide-react";
import ShieldBadge from "./ShieldBadge";
import { motto, mailMessages } from "@/data/mailData";
import { useMailStore } from "@/store/useMailStore";
import MailActions from "./MailActions";
import typhoonImage from "@/assets/typhoon-satellite.jpg";

export default function MailDetail() {
  const {
    selectedContactId,
    editing,
    editedBodies,
    replyMode,
    replies,
    setEditing,
    updateMailBody,
    updateReply,
    setReplyMode,
  } = useMailStore();

  const currentMail = mailMessages[selectedContactId] || mailMessages.eva;
  const mailBody = editedBodies[selectedContactId] || currentMail.body;
  const replyText = replies[selectedContactId] || "";

  const handleBlur = () => {
    setEditing(false);
  };

  const handleSendReply = () => {
    // In a real app this would send; here we just exit reply mode
    setReplyMode(false);
  };

  const renderParagraph = (paragraph: string, index: number, isLast: boolean) => {
    if (paragraph.startsWith("image:")) {
      return (
        <figure key={index} className="my-5">
          <div className="relative w-full max-w-2xl">
            <img
              src={typhoonImage}
              alt="卫星拍摄的巨型台风气旋"
              className="w-full rounded-lg border border-gold/40 dark:border-combat-gold/40 shadow-paper object-cover"
              loading="lazy"
            />
            {/* Cyclone marker overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-void-black/70 dark:bg-black/70 text-combat-alert border border-combat-alert/60 backdrop-blur-sm">
              <AlertTriangle size={14} strokeWidth={1.5} />
              <span className="text-xs font-medium whitespace-nowrap">气旋中心 · 龙类活性反应</span>
            </div>
          </div>
          <figcaption className="sr-only">太空卫星拍摄的巨型台风气旋实拍图</figcaption>
        </figure>
      );
    }

    if (paragraph.startsWith("image-marker:")) {
      const markerText = paragraph.replace("image-marker:", "").replace(/<[^>]+>/g, "");
      return (
        <div key={index} className="flex items-center gap-2 -mt-2 mb-4 text-alert dark:text-combat-alert">
          <AlertTriangle size={14} strokeWidth={1.5} />
          <span className="text-xs font-medium tracking-wide" dangerouslySetInnerHTML={{ __html: markerText }} />
        </div>
      );
    }

    return (
      <p
        key={index}
        contentEditable={editing}
        suppressContentEditableWarning
        onFocus={() => setEditing(true)}
        onBlur={handleBlur}
        onInput={(e) => updateMailBody(index, e.currentTarget.textContent || "")}
        className={`editable-area rounded px-1 -mx-1 transition-all duration-200 ${
          isLast ? "text-gold dark:text-combat-gold font-medium" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    );
  };

  return (
    <article className="relative flex flex-col h-full bg-parchment/60 dark:bg-combat-card/60 transition-colors duration-400">
      {/* Mobile navigation strip */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gold/60 dark:border-combat-gold/60">
        <button type="button" className="text-olive dark:text-combat-gold hover:text-gold dark:hover:text-combat-text transition-colors" aria-label="返回">
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-4 text-olive dark:text-combat-gold">
          <button type="button" aria-label="上一封">
            <ChevronUp size={22} strokeWidth={1.5} />
          </button>
          <button type="button" aria-label="下一封">
            <ChevronDown size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="relative flex-1 overflow-y-auto px-5 py-6 lg:px-10 lg:py-8">
        {/* Decorative shield */}
        <div className="absolute top-4 right-4 lg:top-6 lg:right-8 opacity-25 pointer-events-none">
          <ShieldBadge size={72} className="hidden lg:block" />
          <ShieldBadge size={48} className="lg:hidden" />
        </div>

        {/* Subject */}
        <div className="flex items-center gap-3 mb-5 animate-fade-in-up">
          <h2 className="font-serif-cn text-2xl lg:text-3xl text-charcoal dark:text-combat-text">
            {currentMail.subject}
          </h2>
          {selectedContactId === "eva" && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-alert/10 dark:bg-combat-alert/20 text-alert dark:text-combat-alert border border-alert/30 dark:border-combat-alert/40">
              <AlertTriangle size={11} strokeWidth={1.5} />
              高危
            </span>
          )}
        </div>

        {/* Sender card */}
        <div className="flex items-start justify-between mb-6 pb-4 border-b border-gold/40 dark:border-combat-gold/40 animate-fade-in-up stagger-1">
          <div>
            <div className="text-lg lg:text-xl font-serif-cn text-olive dark:text-combat-gold mb-1">{currentMail.sender}</div>
            <div className="text-sm text-charcoal-light dark:text-combat-muted">
              收件人：{currentMail.recipient}
            </div>
            <div className="text-xs text-gold-dark dark:text-combat-gold/70 mt-1">{currentMail.time}</div>
          </div>
          <button
            type="button"
            className="text-sm text-gold dark:text-combat-gold hover:text-olive dark:hover:text-combat-text transition-colors"
          >
            详情
          </button>
        </div>

        {/* Divider diamond */}
        <div className="flex items-center justify-center mb-6 animate-fade-in-up stagger-2">
          <div className="h-px w-12 bg-gold/50 dark:bg-combat-gold/50" />
          <div className="mx-3 w-2 h-2 rotate-45 bg-gold/70 dark:bg-combat-gold/70" />
          <div className="h-px w-12 bg-gold/50 dark:bg-combat-gold/50" />
        </div>

        {/* Body */}
        <div
          className={`space-y-4 text-charcoal dark:text-combat-text leading-relaxed text-[15px] lg:text-base animate-fade-in-up stagger-3 ${
            editing ? "cursor-text" : "cursor-text lg:cursor-default"
          }`}
        >
          {mailBody.map((paragraph, index) => {
            const isLast = index === mailBody.length - 1;
            return renderParagraph(paragraph, index, isLast);
          })}
        </div>

        {/* Reply composer */}
        {replyMode && (
          <div className="mt-6 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-2 text-olive dark:text-combat-gold">
              <Send size={14} strokeWidth={1.5} />
              <span className="text-sm font-serif-cn">回复 {currentMail.sender}</span>
            </div>
            <textarea
              value={replyText}
              onChange={(e) => updateReply(selectedContactId, e.target.value)}
              placeholder="输入你的回复……"
              className="w-full min-h-[120px] p-3 rounded-md border border-gold/60 dark:border-combat-gold/60 bg-parchment dark:bg-combat-card text-charcoal dark:text-combat-text placeholder:text-charcoal-light/50 dark:placeholder:text-combat-muted/50 focus:outline-none focus:border-gold dark:focus:border-combat-gold resize-y transition-colors"
            />
            <div className="flex items-center justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => setReplyMode(false)}
                className="px-4 py-1.5 text-sm text-charcoal-light dark:text-combat-muted hover:text-charcoal dark:hover:text-combat-text transition-colors"
              >
                取消
              </button>
              <button
                type="button"
                onClick={handleSendReply}
                className="px-4 py-1.5 text-sm rounded-md bg-olive dark:bg-combat-olive text-white dark:text-combat-text hover:bg-olive-dark dark:hover:bg-combat-gold/80 transition-colors"
              >
                发送回复
              </button>
            </div>
          </div>
        )}

        {/* Motto watermark on mobile */}
        <div className="lg:hidden mt-10 text-center">
          <span className="text-[10px] text-gold/40 dark:text-combat-gold/40 tracking-widest uppercase font-serif">
            {motto}
          </span>
        </div>
      </div>

      {/* Actions */}
      <MailActions />
    </article>
  );
}
