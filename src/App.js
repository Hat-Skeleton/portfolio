import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Cody Couper",
    location: "Invercargill, NZ",
    email: "codydpc@gmail.com",
    availability: "Open for work",
    brand: "REMOVE",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
