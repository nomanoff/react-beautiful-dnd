import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  width: ${(props) =>
    props.window === "chat"
      ? "310px"
      : props.window === "matrix"
      ? "740px"
      : "300px"};
  height: 800px;
  margin: 5px;
  user-select: none;
`;

const Handle = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;
  background-image: radial-gradient(grey 15%, transparent 16%),
    radial-gradient(grey 15%, transparent 16%);
  background-size: 10px 10px;
  background-position: 0 0, 30px 30px;
`;

export default function Task({ tasks, index }) {
  return (
    <Draggable draggableId={tasks.id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          window={tasks.window}
        >
          <Handle {...provided.dragHandleProps} />
          {tasks.content}
        </Container>
      )}
    </Draggable>
  );
}
