import { VacancyStatus } from "../../../constants/vacancyStatus";
import Option from "./options/option";
export default function Select({
  onChange,
  value,
  required,
}: {
  onChange: (x: VacancyStatus) => void;
  value: VacancyStatus | undefined;
  required: boolean;
}) {
  return (
    <select
      className={
        "bg-gray-50 border border-sky-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      }
      value={value === undefined ? "" : value}
      onChange={(e) =>
        onChange(
          VacancyStatus[e.currentTarget.value as keyof typeof VacancyStatus]
        )
      }
      required={required}
    >
      <option value={undefined}>ANY STATUS</option>
      {(Object.keys(VacancyStatus) as Array<keyof typeof VacancyStatus>).map(
        (el) => (
          <Option el={el}></Option>
        )
      )}
    </select>
  );
}
