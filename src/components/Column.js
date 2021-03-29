import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  width: 800px;
  height: 400px;
  background-color: #c6e2c6;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 10px;
`;

const Title = styled.div`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>

        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
