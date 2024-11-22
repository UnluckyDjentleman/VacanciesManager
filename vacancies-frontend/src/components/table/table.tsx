import { tableHeaders } from "../../constants/tableHeaders";
import Vacancy from "../../constants/types/vacancy";
import TableHeader from "./tableElements/tableHeader";
import TableRaw from "./tableElements/tableRaw";

export default function Table({ items }: { items: Vacancy[] }) {
  return (
    <table className="w-4/5 md:w-full">
      <TableHeader headers={tableHeaders} />
      {items.map((el) => (
        <TableRaw el={el} />
      ))}
    </table>
  );
}
