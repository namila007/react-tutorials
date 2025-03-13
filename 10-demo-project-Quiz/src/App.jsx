import { Header } from "./components/Header.jsx";
import { Quiz } from "./components/Quiz.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>React Quiz</h1>
        <p>Test your knowledge about React</p>
        <Quiz />
      </main>
    </>
  );
}

export default App;
