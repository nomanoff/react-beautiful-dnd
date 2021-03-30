import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
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
  display: flex;
  flex-direction: row;
  font-weight: 800px;
`;

export default function Column({ column, tasks }) {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} direction={"horizontal"}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} tasks={task} index={index}></Task>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
