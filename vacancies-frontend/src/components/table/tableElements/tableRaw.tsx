import { useContext } from "react";
import Vacancy from "../../../constants/types/vacancy";
import { ModalContext } from "../../modal/context/modal.context";
import Status from "../../status/status";
import Button from "../../header/button/button";
import { DeleteVac } from "../../../utils/functions/deleteVacancy";
import { useAppDispatch } from "../../../utils/hooks/useRedux";
import { removeVacancy } from "../../../store/reducers/vacanciesReducer";

export default function TableRaw({ el }: { el: Vacancy }) {
  const dispatch = useAppDispatch();
  const { viewUpdateModal } = useContext(ModalContext);
  const deleteChosen = (id: string) => {
    DeleteVac(id).then((data: Vacancy) =>
      dispatch(removeVacancy({ vacancy: data }))
    );
  };
  return (
    <tr
      className={
        "py-2 border-y-2 border-gray-200 hover:bg-blue-100 cursor-pointer"
      }
    >
      <td>{el.companyName}</td>
      <td>{el.vacancy}</td>
      <td>
        <Status value={el.status as string} />
      </td>
      <td>
        {el.minSalary}$-{el.maxSalary}$
      </td>
      <td className="hidden sm:table-cell px-4 py-6 text-center">{el.note}</td>
      <td>
        <div>
          <Button
            color={"blue"}
            innerText={"Update"}
            onClick={() => viewUpdateModal(el)}
          ></Button>
          <Button
            color={"red"}
            innerText={"Delete"}
            onClick={() => deleteChosen(el.id)}
          ></Button>
        </div>
      </td>
    </tr>
  );
}
