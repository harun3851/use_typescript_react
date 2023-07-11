import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import "./index.css";
import { useState } from 'react'

type Props = {};

const App = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <div>
      <Heading title={"hello"} />
      <Section> this is my section </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </div>
  );
};

export default App;
