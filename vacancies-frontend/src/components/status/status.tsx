import { VacancyStatus } from "../../constants/vacancyStatus";

export default function Status({ value }: { value: string }) {
  const map = new Map();
  map.set(VacancyStatus.PUBLISHED, "yellow");
  map.set(VacancyStatus.ACCEPTED, "green");
  map.set(VacancyStatus.DECLINED, "red");
  const color: string = map.get(value);
  let className: string = "";
  switch (color) {
    case "green":
      className =
        "bg-green-50 border border-green-400 rounded text-green-800 text-center flex justify-center";
      break;
    case "red":
      className =
        "bg-red-50 border border-red-400 rounded text-red-800 text-center flex justify-center";
      break;
    case "yellow":
      className =
        "bg-yellow-50 border border-yellow-400 rounded text-yellow-800 text-center flex justify-center";
      break;
  }
  return <div className={className}>{value}</div>;
}
