import { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighLightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
