import { FormEvent, useContext, useState } from "react";
import Input from "../../header/input/input";
import Select from "../../header/select/select";
import Range from "../../header/range/range";
import { VacancyStatus } from "../../../constants/vacancyStatus";
import { ModalContext } from "../context/modal.context";
import Vacancy from "../../../constants/types/vacancy";
import { AddNewVacancy } from "../../../utils/functions/addVacancy";
import { addVacancy } from "../../../store/reducers/vacanciesReducer";
import { useAppDispatch } from "../../../utils/hooks/useRedux";
import Message from "../../message/message";
import { UpdateVacById } from "../../../utils/functions/updateVacancy";

export default function AddVacancy() {
  const dispatch = useAppDispatch();
  const { closeModal } = useContext(ModalContext);
  const [company, setCompany] = useState<string | undefined>("");
  const [vacancy, setVacancy] = useState<string | undefined>("");
  const [minSalary, setMinSalary] = useState<number | undefined>(0);
  const [maxSalary, setMaxSalary] = useState<number | undefined>(0);
  const [status, setStatus] = useState<VacancyStatus>();
  const [note, setNote] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | null>(null);
  async function submitAdding(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const newVac: Omit<Vacancy, "id"> = {
        companyName: company as string,
        vacancy: vacancy as string,
        minSalary: minSalary as number,
        maxSalary: maxSalary as number,
        status: status as VacancyStatus,
        note: note as string,
      };
      const resp = await AddNewVacancy(newVac);
      console.log(resp);
      dispatch(addVacancy({ vacancy: resp }));
      closeModal();
    } catch (e) {
      console.log(e);
      setMessage(e.response.data as string);
    }
  }

  return (
    <form className="w-full" onSubmit={submitAdding}>
      <div className="mb-4">
        <Input
          type={"text"}
          placeholder={"Company"}
          value={company}
          onChange={setCompany}
          required={true}
        />
      </div>
      <div className="mb-4">
        <Input
          type={"text"}
          placeholder={"Vacancy"}
          value={vacancy}
          onChange={setVacancy}
          required={true}
        />
      </div>
      <div className="mb-4">
        <Range
          label={"Min Salary"}
          value={minSalary}
          onChange={setMinSalary}
          min={0}
          max={5000}
          step={100}
          required={true}
        />
      </div>
      <div className="mb-4">
        <Range
          label={"Max Salary"}
          value={maxSalary}
          onChange={setMaxSalary}
          min={100}
          max={10000}
          step={100}
          required={true}
        />
      </div>
      <div className="mb-4">
        <Select onChange={setStatus} value={status} required={false} />
      </div>
      <div className="mb-4">
        <Input
          type={"textarea"}
          placeholder={"Note"}
          value={note}
          onChange={setNote}
          required={false}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white block mx-auto w-[200px] sm:w-[320px] rounded-lg px-4 py-2"
      >
        Add New Vacancy
      </button>
      {message !== null && <Message message={message} type={"error"} />}
    </form>
  );
}
