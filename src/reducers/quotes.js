export default (state = [{
  content: '',
  author: ''
}], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return { quote: state.content }
  }
  return state;
}
