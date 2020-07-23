// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
    return  {
        type: 'ADD_QUOTE',
        quote: quote
    }
}

export const removeQuote = (quote) => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId: quote
    }
}

export const upvoteQuote = (quoteId) => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: quoteId
    }
}

export const downvoteQuote = (quote) => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: quote
    }
}