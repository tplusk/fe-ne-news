import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { NavBar } from "./Navbar";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        setErr(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Uhhh, ohhh...! Something went wrong!</p>;

  return (
    <>
      <br></br>
      <ul>
        {topics.map((topic) => {
          return <menu key={topic}>{topic.slug}</menu>;
        })}
      </ul>
      <br></br>
      <NavBar />
    </>
  );
};
