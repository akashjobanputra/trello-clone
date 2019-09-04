import React, { Component } from 'react';
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import TrelloList from "./TrelloList";
import TrelloActionButton from './TrelloActionButton';

class App extends Component {

  onDragEnd = () => {
    // TODO: reordering logic
  }

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Hello World!</h2>
          <div style={styles.listsContainer}>
            {lists.map(list =>
              (<TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />))}
            <TrelloActionButton list />
          </div>
          {/* <TrelloList title="Test"/> */}
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
