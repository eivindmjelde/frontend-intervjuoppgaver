import { useDraggable } from "@dnd-kit/core";
import clsx from "clsx";

type Props = { id: string } & WithChildren & WithClasses;

export const Draggable = ({ id, children, className }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: "999",
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={clsx("text-left", className)}
    >
      {children}
    </button>
  );
};
