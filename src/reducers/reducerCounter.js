const initialState = {
  counter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + action.amount
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - action.amount
      }
    default:
      return state
  }
}