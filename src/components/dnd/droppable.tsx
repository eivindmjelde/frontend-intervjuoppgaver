import { useDroppable } from "@dnd-kit/core";

type Props = { id: string } & WithChildren & WithClasses;

export const Droppable = ({ id, children, className }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    outline: isOver ? "2px solid green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className={className}>
      {children}
    </div>
  );
};
