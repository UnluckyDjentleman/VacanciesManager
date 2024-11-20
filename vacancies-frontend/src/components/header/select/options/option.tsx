export default function Option({
  el,
}: {
  el: "PUBLISHED" | "ACCEPTED" | "DECLINED" | "";
}) {
  return <option value={el}>{el}</option>;
}
