export default function TableHeader({ headers }: { headers: string[] }) {
  return (
    <thead>
      <tr>
        {headers.map((el) => (
          <th
            key={el}
            className={`sm:table-cell px-4 py-6 text-center ${
              el === "Note" || el === "Status" || el === "Salary"
                ? "hidden"
                : ""
            }`}
          >
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
}
