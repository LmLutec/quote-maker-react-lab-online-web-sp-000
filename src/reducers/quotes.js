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
      let quoteId = state.findIndex((quote) => {
        return action.quoteId === quote.id
      })
      let quote = state[quoteId]
    console.log(quote)
      return [...state.slice(0, quoteId), 
        Object.assign({}, quote, {votes: quote.votes +=1 }),
        ...state.slice(quoteId + 1)
      ]

    //   state.map((i) => {
      
    //     if (i.id === action.quoteId){
    //       i.votes = i.votes + 1
    //     } 
    //   })
    //   // console.log(i)
      
    // return state

    case 'DOWNVOTE_QUOTE':
      state.map((i) => {
        if (i.id == action.quoteId){    
          if (i.votes !== 0)
          i.votes = i.votes - 1
        } 
      })
    
    break;

  default: return state;
}
}