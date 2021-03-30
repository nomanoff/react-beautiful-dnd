import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Chat from "./Chat";
import ChatWindow from "./Chat";

const Container = styled.div`
  border: 0px solid lightgrey;
  border-radius: 0px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  width: ${(props) =>
    props.window === "chat"
      ? null
      : props.window === "matrix"
      ? "800px"
      : null};
  height: 800px;
  margin: 0px;
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
          {tasks.window === "chat" ? (
            <ChatWindow>{tasks.content}</ChatWindow>
          ) : (
            tasks.content
          )}
        </Container>
      )}
    </Draggable>
  );
}
