export const counterIncrease = () => dispatch => {
  dispatch({
    type: 'INCREASE',
    amount: 1
  })
}

export const counterDecrease = () => dispatch => {
  dispatch({
    type: 'DECREASE',
    amount: 1
  })
}