import Input from "./input/input";
import Range from "./range/range";
import Select from "./select/select";
import { VacancyStatus } from "../../constants/vacancyStatus";
import Button from "./button/button";
import { setFilter } from "../../store/reducers/filterReducer";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";

export default function Header() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter.filter);
  return (
    <div className={"w-full flex flex-col mb-7"}>
      <div
        className={
          "w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-2 mx-auto"
        }
      >
        <div>
          <Input
            type={"search"}
            placeholder={"Enter the name of company"}
            value={filter.companyName as string}
            onChange={(str: string | undefined) =>
              dispatch(setFilter({ filter: { ...filter, companyName: str } }))
            }
            required={false}
          ></Input>
        </div>
        <div>
          <Input
            type={"search"}
            placeholder={"Enter the name of vacancy"}
            value={filter.vacancy as string}
            onChange={(str: string | undefined) =>
              dispatch(setFilter({ filter: { ...filter, vacancy: str } }))
            }
            required={false}
          ></Input>
        </div>
        <div>
          <Select
            onChange={(
              str:
                | VacancyStatus.PUBLISHED
                | VacancyStatus.DECLINED
                | VacancyStatus.ACCEPTED
                | undefined
            ) => dispatch(setFilter({ filter: { ...filter, status: str } }))}
            value={filter.status}
            required={false}
          ></Select>
        </div>
      </div>
      <div
        className={
          "w-full flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center py-2 mx-auto"
        }
      >
        <div className="w-max">
          <Range
            label={"Min Salary"}
            value={filter.minSalary as number}
            onChange={(num: number | undefined) =>
              dispatch(setFilter({ filter: { ...filter, minSalary: num } }))
            }
            min={0}
            max={5000}
            step={100}
            required={false}
          ></Range>
        </div>
        <div className="w-max">
          <Range
            label={"Max Salary"}
            value={filter.maxSalary as number}
            onChange={(num: number | undefined) =>
              dispatch(setFilter({ filter: { ...filter, maxSalary: num } }))
            }
            min={100}
            max={10000}
            step={100}
            required={false}
          ></Range>
        </div>
      </div>
      <Button
        color={"#0ea5e9"}
        innerText={"Reset Filters"}
        onClick={() =>
          dispatch(
            setFilter({
              filter: {
                companyName: undefined,
                vacancy: undefined,
                minSalary: undefined,
                maxSalary: undefined,
                status: undefined,
              },
            })
          )
        }
      ></Button>
    </div>
  );
}
