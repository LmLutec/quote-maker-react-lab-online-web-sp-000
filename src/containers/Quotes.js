import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote) => {
                return <QuoteCard key={quote.id} quote = {quote} upvote={this.props.upvoteQuote}/>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapToProps = (state) => {
  return {
    quotes: state.quotes 
  }
}
//add arguments to connect as needed
export default connect(mapToProps,{upvoteQuote, downvoteQuote})(Quotes);
