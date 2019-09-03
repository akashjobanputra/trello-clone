import React, { Component } from 'react';
import { connect } from "react-redux";

import TrelloList from "./TrelloList";

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Hello World!</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (<TrelloList title={list.title} cards={list.cards} />))}
        </div>
        {/* <TrelloList title="Test"/> */}
      </div>
    );
  }
}

const styles = {
  listsContainer : {
    display: "flex",
    flexDirection: "row",
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
