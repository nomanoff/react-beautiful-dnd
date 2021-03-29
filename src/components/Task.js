import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default function Task({ tasks, index }) {
  return (
    <Draggable draggableId={tasks.id} index={index}>
      {(provided, innerRef) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerRef}
        >
          {tasks.content}
        </Container>
      )}
    </Draggable>
  );
}
