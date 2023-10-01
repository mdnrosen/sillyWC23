import React, { useState, useEffect } from "react";

import { Avatar, Card, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { DragHandle } from '@mui/icons-material';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useGuesses } from "../context/GuessContext";

export const DragAndDrop = ({ initialData, questionName }) => {
    const { guesses, updateArrayAnswer } = useGuesses()

    const [ data, setData ] = useState(guesses[questionName] || initialData)
    const [ order, setOrder ] = useState(guesses[questionName] || [])


    useEffect(() => {
        updateArrayAnswer(questionName, order)
    },[order])

    useEffect(() => {
        const propsData = data.map((item, i) => {
            return {
                position: i + 1,
                name: item.name,
                id: item.id,
                image: item.image
            }
        })
        setOrder(propsData)
    },[data])
    
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      };
      
      const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        padding: 1,
        background: isDragging ? "#FFE9D6" : "black",
        ...draggableStyle
      });
      
      const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "#A7D0CD" : "lightgrey",
        padding: 1,
        width: '100%'
      });
      

    const onDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return
    
        const newData = reorder(
            data,
            source.index,
            destination.index
        );

        setData(newData)
    }

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                        <Card>
                            <ListItem
                              secondaryAction={
                                <DragHandle />
                              }
                            >
                                <ListItemAvatar>
                                    <Avatar 
                                        variant="square"
                                        size="lg"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={<Typography color="primary" variant="h6">{item.name.toUpperCase()}</Typography>}
                                />         
                            </ListItem>
                        </Card>
           
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
}

