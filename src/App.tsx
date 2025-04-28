import About from "./components/About";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter />
      <About msg="This is a webpack project!" />
    </>
  );
};

export default App;
