export default (state = [{
  content: '',
  author: ''
}], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      state = [...state, action.quote] 
    return state 
    case 'UPVOTE_QUOTE':
    console.log(action)
  }
  return state;
}
