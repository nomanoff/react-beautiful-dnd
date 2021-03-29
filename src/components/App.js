import React from "react";
import initialData from "../initial-data";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    //function to reorder
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default App;
