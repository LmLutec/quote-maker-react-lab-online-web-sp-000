export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      state = [...state, action.quote] 
    return state 

    case 'REMOVE_QUOTE':
      state.map((i) => {
        if (i.id == action.quoteId){
          let rmv = state.indexOf(i)
        } 
      })
    return state 

    case 'UPVOTE_QUOTE':
      state.map((i) => {
        if (i.id == action.quoteId){
          i.votes = i.votes + 1
        } 
      })
    return state

    case 'DOWNVOTE_QUOTE':
      state.map((i) => {
        if (i.id == action.quoteId){
          if (i.votes !== 0)
          i.votes = i.votes - 1
        } 
      })


  default: return state;
}
}