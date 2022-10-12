import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import { BoardContainer, BoardColumn, BoardTask } from "./components/board";
import { Draggable, Droppable } from "./components/dnd";
import { tasks as taskList } from "./tasks";
import { Task } from "./types";

function App() {
  const [columns, setColumns] = useState<{ id: UniqueIdentifier }[]>([
    { id: "📖  Backlog" },
    { id: "⏳  Under arbeid" },
    { id: "✅  Ferdig" },
  ]);

  const [tasks, setTasks] = useState<
    Array<Task & { parent: UniqueIdentifier }>
  >(taskList.map((task) => ({ ...task, parent: columns[0].id })));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over) {
      setTasks(
        tasks.map((task) =>
          task.id === active.id ? { ...task, parent: over.id } : task
        )
      );
    }
  };

  return (
    <main className="grid place-items-center h-screen w-screen p-10 bg-gradient-to-b from-cyan-500 to-indigo-500">
      <DndContext onDragEnd={handleDragEnd}>
        <BoardContainer
          heading={
            <h1 className="text-xl font-semibold">Kantegas Intervjubrett™️</h1>
          }
        >
          {columns.map(({ id }) => (
            <Droppable key={id} id={String(id)} className="h-full">
              <BoardColumn heading={String(id)}>
                {tasks
                  .filter((task) => task.parent === id)
                  .map((task) => (
                    <Draggable id={task.id} key={task.id}>
                      <BoardTask key={task.id} {...task} />
                    </Draggable>
                  ))}
              </BoardColumn>
            </Droppable>
          ))}
        </BoardContainer>
      </DndContext>
    </main>
  );
}

export default App;
