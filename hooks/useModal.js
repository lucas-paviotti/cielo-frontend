import { create } from "zustand";

const useModal = create((set) => ({
  modals: {
    contact: { isOpen: false, data: null },
    gallery: { isOpen: false, data: null },
  },
  toggleModal: (modal) =>
    set((prev) => ({
      modals: {
        ...prev.modals,
        [modal]: {
          isOpen: !prev.modals[modal].isOpen,
          data:
            prev.modals[modal].isOpen === true ? null : prev.modals[modal].data,
        },
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
