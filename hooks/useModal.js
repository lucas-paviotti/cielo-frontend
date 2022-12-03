import create from "zustand";

const useModal = create((set) => ({
  modals: {
    contact: false,
    gallery: false,
  },
  toggleModal: (s) =>
    set((prev) => ({ modals: { ...prev.modals, [s]: !prev.modals[s] } })),
}));

export default useModal;
