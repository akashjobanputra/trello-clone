import React from "react";
import { Droppable } from "react-beautiful-dnd";

import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={styles.container}
                >
                    <h4>{title}</h4>
                    {cards.map((card, index) => (
                        <TrelloCard key={card.id}
                            text={card.text}
                            id={card.id}
                            index={index}
                        />
                    ))}
                    <TrelloActionButton listID={listID} />
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
        height: "100%"
    }
}

export default TrelloList;