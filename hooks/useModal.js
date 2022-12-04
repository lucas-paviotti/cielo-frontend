import create from "zustand";

const useModal = create((set) => ({
  modals: {
    contact: { isOpen: false, data: null },
    gallery: { isOpen: false, data: null },
  },
  toggleModal: (modal) =>
    set((prev) => ({
      modals: {
        ...prev.modals,
        [modal]: { ...prev.modals[modal], isOpen: !prev.modals[modal].isOpen },
      },
    })),
  setData: (modal, newData) =>
    set((prev) => ({
      modals: {
        ...prev.modals,
        [modal]: { ...prev.modals[modal], data: newData },
      },
    })),
}));

export default useModal;
