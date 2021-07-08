import React from "react";
import { useParams, Route } from "react-router-dom";

import HighLightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Allwin",
    text: "Allwin Rules",
  },
  {
    id: "q2",
    author: "Max",
    text: "Learning React is fun",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
      {/* Alternate */}
      {/* <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route> */}
    </>
  );
};

export default QuoteDetail;
