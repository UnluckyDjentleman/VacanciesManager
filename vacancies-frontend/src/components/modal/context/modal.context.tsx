import { createContext, ReactNode, useState } from "react";
import Vacancy from "../../../constants/types/vacancy";
import { createPortal } from "react-dom";
import Modal from "../modal";
import UpdateVacancy from "../components/updateVacancy";
import AddVacancy from "../components/addVacancy";

const initialState = {
  viewAddModal: () => {},
  viewUpdateModal: (_: Vacancy) => {},
  closeModal: () => {},
};

export const ModalContext = createContext(initialState);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [activeModal, setActiveModal] = useState<
    "addVacancy" | "updateVacancy" | null
  >(null);
  const [activeVacation, setActiveVacation] = useState<Vacancy>();

  const contextVal = {
    viewAddModal: () => {
      setIsOpen(true);
      setActiveModal("addVacancy");
    },
    viewUpdateModal: (vac: Vacancy) => {
      setIsOpen(true);
      setActiveModal("updateVacancy");
      setActiveVacation(vac);
    },
    closeModal: () => {
      setIsOpen(false);
      setActiveModal(null);
    },
  };

  const getModal = () => {
    switch (activeModal) {
      case "addVacancy":
        return <AddVacancy />;
      case "updateVacancy":
        return <UpdateVacancy el={activeVacation as Vacancy} />;
      default:
        return undefined;
    }
  };

  return (
    <ModalContext.Provider value={contextVal}>
      {children}
      {isOpen && createPortal(<Modal>{getModal()}</Modal>, document.body)}
    </ModalContext.Provider>
  );
};
