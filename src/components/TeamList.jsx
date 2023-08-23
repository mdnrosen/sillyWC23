import React, { useState, useEffect } from "react";

import { Avatar, Card, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import teamData from '../assets/data/teams.json'


export const TeamList = () => {
    const [ teams, setTeams ] = useState(teamData)
    const [ teamOrder, setTeamOrder ] = useState(teamData)

    useEffect(() => {
        const propsData = teams.map((team, i) => {
            return {
                position: i + 1,
                name: team.name,
            }
        })
        setTeamOrder(propsData)
    },[teams])
    
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
    
        const newTeams = reorder(
            teams,
            source.index,
            destination.index
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

