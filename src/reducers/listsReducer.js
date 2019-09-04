import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 5;

const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Created a static list and a static card."
      },
      {
        id: 1,
        text: "Used a mix between material UI React and Styled Components."
      }
    ]
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 2,
        text: "Will Create first Reducer."
      },
      {
        id: 3,
        text: "And render many cards on our lists with static data."
      },
      {
        id: 4,
        text: "Added roboto fonts and font icons from material-ui getting started."
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      }
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      }
      cardID += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list;
        }
      });
      return newState;
    default:
      return state;
  }
}

export default listsReducer;