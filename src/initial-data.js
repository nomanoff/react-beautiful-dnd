import React from "react";
function Message() {
  return <h3>BOX ONE</h3>;
}

const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: <Message />,
      window: "chat",
    },
    "task-2": {
      id: "task-2",
      content: "BOX TWO",
      window: "matrix",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Top",
      taskIds: ["task-1", "task-2"],
    },
  },
  //Facilitate reordering of the colums:
  columnOrder: ["column-1"],
};

export default initialData;
