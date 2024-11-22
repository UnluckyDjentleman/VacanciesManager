import { FormEvent, useContext, useState } from "react";
import Vacancy from "../../../constants/types/vacancy";
import Range from "../../header/range/range";
import { ModalContext } from "../context/modal.context";
import { VacancyStatus } from "../../../constants/vacancyStatus";
import Input from "../../header/input/input";
import Select from "../../header/select/select";
import { UpdateVacById } from "../../../utils/functions/updateVacancy";
import { updateVacancy } from "../../../store/reducers/vacanciesReducer";
import { useAppDispatch } from "../../../utils/hooks/useRedux";
import Message from "../../message/message";

export default function UpdateVacancy({ el }: { el: Vacancy }) {
  const dispatch = useAppDispatch();
  const { closeModal } = useContext(ModalContext);
  const [company, setCompany] = useState<string | undefined>(el.companyName);
  const [vacancy, setVacancy] = useState<string | undefined>(el.vacancy);
  const [minSalary, setMinSalary] = useState<number | undefined>(el.minSalary);
  const [maxSalary, setMaxSalary] = useState<number | undefined>(el.maxSalary);
  const [status, setStatus] = useState<VacancyStatus>(el.status);
  const [note, setNote] = useState<string | undefined>(el.note);
  const [message, setMessage] = useState<string | null>(null);
  async function submitUpdating(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    const body: Partial<Vacancy> = {
      companyName: company,
      vacancy: vacancy,
      minSalary: minSalary,
      maxSalary: maxSalary,
      status: status,
      note: note,
    };
    console.log(body);
    try {
      const data: Vacancy = await UpdateVacById(el.id, body);
      dispatch(updateVacancy({ vacancy: data }));
      closeModal();
    } catch (e) {
      setMessage(e.response.data.message);
    }
  }

  return (
    <form className="w-full" onSubmit={submitUpdating}>
      <div className="mb-4">
        <Input
          type={"text"}
          placeholder={"Company"}
          value={company}
          onChange={setCompany}
        />
      </div>
      <div className="mb-4">
        <Input
          type={"text"}
          placeholder={"Vacancy"}
          value={vacancy}
          onChange={setVacancy}
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
        />
      </div>
      <div className="mb-4">
        <Select onChange={setStatus} value={status} />
      </div>
      <div className="mb-4">
        <Input
          type={"textarea"}
          placeholder={"Note"}
          value={note}
          onChange={setNote}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white block mx-auto w-[200px] sm:w-[320px] rounded-lg px-4 py-2"
      >
        Update Vacancy
      </button>
      {message && <Message message={message} type={"error"} />}
    </form>
  );
}
