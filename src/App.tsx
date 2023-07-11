import React from "react";
import PostList from "./components/postList/PostList";
import Heading from "./components/Heading";
import { Section } from "./components/Section";

type Props = {};

const App = () => {
  return <div>
    <Heading title={"hello"} />
    <Section > this is my section </Section>
  </div>;
};

export default App;
