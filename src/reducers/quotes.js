export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      state = [...state, action.quote] 
    return state 

    case 'REMOVE_QUOTE':
      state.map((i) => {
        if (i.id === action.quoteId){
          let rmv = state.indexOf(i)
        } 
      })
      return state 

    case 'UPVOTE_QUOTE':
      let quoteId = state.findIndex((quote) => {
        return action.quoteId === quote.id
      })
      let quote = state[quoteId]
    
      return [...state.slice(0, quoteId), 
        Object.assign({}, quote, {votes: quote.votes +=1 }),
        ...state.slice(quoteId + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      let qId = state.findIndex((quote) => {
        return action.quoteId === quote.id
      })
      let dwnQuote = state[qId]

      if (dwnQuote.votes !== 0){

      return [...state.slice(0, qId), 
        Object.assign({}, dwnQuote, {votes: dwnQuote.votes -=1 }),
        ...state.slice(qId - 1)
      ]
      }
    

    default: return state;
  }
}