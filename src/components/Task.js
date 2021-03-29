import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  display: flex;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgrey" : "white")};
  box-shadow: ${(props) =>
    props.isDragging ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none"};
`;

// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: grey;
//   border-radius: 2px;
//   margin-right: 12px;
// `;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={false}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
