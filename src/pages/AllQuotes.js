import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
