import clsx from "clsx";
import { Task } from "../../types";

type Props = Optional<Task, "completed">;

const paddingClasses = "px-3 py-2";

export const BoardTask = ({ id, title, completed = false }: Props) => (
  <div className="grid grid-rows-[1fr 3fr 1fr] bg-slate-100 drop-shadow rounded">
    <div className={clsx(paddingClasses, "text-xs text-right italic")}>
      TIB-{id}
    </div>
    <div
      className={clsx(
        paddingClasses,
        "border-y-2 border-slate-200 font-medium py-4"
      )}
    >
      {title}
    </div>
    <div className={clsx(paddingClasses, "text-xs text-right")}>
      {completed ? "☑️ Completed" : "🕑 Pending"}
    </div>
  </div>
);
