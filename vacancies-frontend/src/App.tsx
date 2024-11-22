import { useContext, useRef } from "react";
import { useAppSelector } from "./utils/hooks/useRedux";
import Vacancy from "./constants/types/vacancy";
import FilterForVacancies from "./constants/types/filterForVacancies";
import Table from "./components/table/table";
import Message from "./components/message/message";
import Loader from "./components/loader/loader";
import Header from "./components/header/header";
import {
  ModalContext,
  ModalProvider,
} from "./components/modal/context/modal.context";
import useGetAllVacancies from "./utils/hooks/useGetAllVacancies";
import Button from "./components/header/button/button";
import "./App.css";

function App() {
  const filter = useAppSelector((state) => state.filter.filter);
  const { vacancies, load, error } = useGetAllVacancies(filter);
  const defaultVacancies = useRef<Vacancy[]>(vacancies);
  const defaultFilter = useRef<FilterForVacancies>(filter);
  if (load === false) {
    defaultVacancies.current = vacancies;
  } else if (load === true) {
    if (
      defaultFilter.current.companyName !== filter.companyName ||
      defaultFilter.current.status !== filter.status ||
      defaultFilter.current.vacancy !== filter.vacancy ||
      defaultFilter.current.maxSalary !== filter.maxSalary ||
      defaultFilter.current.minSalary !== filter.minSalary
    ) {
      defaultVacancies.current = [];
      defaultFilter.current = filter;
    }
  }

  const { viewAddModal } = useContext(ModalContext);

  return (
    <ModalProvider>
      <Header></Header>
      <div className={"w-full flex justify-end"}>
        <Button
          color={"green"}
          innerText={"+"}
          onClick={() => viewAddModal()}
        ></Button>
      </div>
      {load === true && <Loader></Loader>}
      {load === false && vacancies.length !== 0 && (
        <Table items={defaultVacancies.current}></Table>
      )}
      {load === false && vacancies.length === 0 && (
        <Message
          message={"Sorry, but we cannot find any vacancy for you"}
          type={"info"}
        ></Message>
      )}
      {error && <Message message={error as string} type={"error"}></Message>}
    </ModalProvider>
  );
}

export default App;
