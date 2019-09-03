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
        id: 0,
        text: "Will Create first Reducer."
      },
      {
        id: 1,
        text: "And render many cards on our lists with static data."
      },
      {
        id: 2,
        text: "Added roboto fonts and font icons from material-ui getting started."
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default listsReducer;