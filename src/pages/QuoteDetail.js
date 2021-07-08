import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

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
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
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
