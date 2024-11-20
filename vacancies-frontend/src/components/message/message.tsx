export default function Message({
  message,
  type,
}: {
  message: string;
  type: "info" | "error";
}) {
  return (
    <div
      className={`bg-${type === "error" ? "red" : "yellow"}-50 border border-${
        type === "error" ? "red" : "yellow"
      }-400 rounded text-${
        type === "error" ? "red" : "yellow"
      }-800 text-sm p-4 flex items-start`}
    >
      {message}
    </div>
  );
}
