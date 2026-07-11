import { create } from "zustand";
import { contacts, defaultContactId, mailMessages } from "@/data/mailData";

interface MailState {
  selectedContactId: string;
  selectedFolderId: string;
  drawerOpen: boolean;
  editing: boolean;
  editedBodies: Record<string, string[]>;
  starredIds: string[];
  replies: Record<string, string>;
  replyMode: boolean;
  deleteModalOpen: boolean;
  setSelectedContact: (id: string) => void;
  setSelectedFolder: (id: string) => void;
  toggleDrawer: () => void;
  setDrawerOpen: (open: boolean) => void;
  toggleEditing: () => void;
  setEditing: (editing: boolean) => void;
  updateMailBody: (index: number, text: string) => void;
  toggleStar: (id: string) => void;
  isStarred: (id: string) => boolean;
  setReplyMode: (open: boolean) => void;
  updateReply: (id: string, text: string) => void;
  setDeleteModalOpen: (open: boolean) => void;
}

export const useMailStore = create<MailState>((set, get) => ({
  selectedContactId: defaultContactId,
  selectedFolderId: "inbox",
  drawerOpen: false,
  editing: false,
  editedBodies: {},
  starredIds: [],
  replies: {},
  replyMode: false,
  deleteModalOpen: false,
  setSelectedContact: (id) =>
    set((state) => ({
      selectedContactId: id,
      editing: false,
      replyMode: false,
      editedBodies: {
        ...state.editedBodies,
        [id]: state.editedBodies[id] || [...mailMessages[id].body],
      },
    })),
  setSelectedFolder: (id) =>
    set((state) => {
      // If switching to important folder, ensure at least one starred contact is selected
      if (id === "important" && state.starredIds.length > 0 && !state.starredIds.includes(state.selectedContactId)) {
        const firstStarred = state.starredIds[0];
        return {
          selectedFolderId: id,
          selectedContactId: firstStarred,
          editing: false,
          replyMode: false,
          editedBodies: {
            ...state.editedBodies,
            [firstStarred]: state.editedBodies[firstStarred] || [...mailMessages[firstStarred].body],
          },
        };
      }
      return { selectedFolderId: id, editing: false, replyMode: false };
    }),
  toggleDrawer: () => set((state) => ({ drawerOpen: !state.drawerOpen })),
  setDrawerOpen: (open) => set({ drawerOpen: open }),
  toggleEditing: () => set((state) => ({ editing: !state.editing })),
  setEditing: (editing) => set({ editing }),
  updateMailBody: (index, text) =>
    set((state) => {
      const current = state.editedBodies[state.selectedContactId] || [...mailMessages[state.selectedContactId].body];
      const next = [...current];
      next[index] = text;
      return {
        editedBodies: {
          ...state.editedBodies,
          [state.selectedContactId]: next,
        },
      };
    }),
  toggleStar: (id) =>
    set((state) => {
      const setIds = new Set(state.starredIds);
      if (setIds.has(id)) {
        setIds.delete(id);
      } else {
        setIds.add(id);
      }
      return { starredIds: Array.from(setIds) };
    }),
  isStarred: (id) => get().starredIds.includes(id),
  setReplyMode: (open) => set({ replyMode: open, editing: false }),
  updateReply: (id, text) =>
    set((state) => ({
      replies: {
        ...state.replies,
        [id]: text,
      },
    })),
  setDeleteModalOpen: (open) => set({ deleteModalOpen: open }),
}));

// Selector hook helpers
export const selectStarredContacts = (state: MailState) =>
  contacts.filter((c) => state.starredIds.includes(c.id));
