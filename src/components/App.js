import React, { useState } from "react";
import initialData from "../initial-data";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  // const [data, setData] = useState(initialData);
  const data = initialData;

  const onDragEnd = (result) => {
    //Function: reorder our column
  };

  return (
    <div className="wrapper">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
