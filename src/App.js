import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer className="w-50 m-auto" />
    </Container>
  );
}

export default App;
