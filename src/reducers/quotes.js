export default (state = [{
  content: '',
  author: ''
}], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      console.log(`action: ${action}`)
      state = [...state, action.quote] 
    return state 
  //   case 'UPVOTE_QUOTE':

  // }
  return state;
}
