import React, { useState } from "react";

import { Avatar, Card, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import teamData from '../assets/data/teams.json'


export const TeamList = () => {
    const [ teams, setTeams ] = useState(teamData)


    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
      };
      
      
      const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: 1,
      
        // change background colour if dragging
        background: isDragging ? "#FFE9D6" : "black",
      
        // styles we need to apply on draggables
        ...draggableStyle
      });
      
      const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "#A7D0CD" : "lightgrey",
        padding: 1,
        width: '100%'
      });
      

  const onDragEnd = (result) => {
    if (!result.destination) {
        return;
      }
  
      const newTeams = reorder(
        teams,
        result.source.index,
        result.destination.index
      );

      setTeams(newTeams)
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
              {teams.map((team, index) => (
                <Draggable key={team.id} draggableId={team.id} index={index}>
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
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar 
                                        variant="square"
                                        size="lg"
                                        src={team.image}
                                        alt={team.name}
                                    />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={<Typography color="primary" variant="h6">{team.name.toUpperCase()}</Typography>}
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

