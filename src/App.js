import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Cody Couper",
    location: "Invercargill, NZ",
    email: "codydpc@gmail.com",
    availability: "Open for work",
    brand:
      "Hey i'm Cody, I'm a student my final year and have a passion for devlopment. I have skills in C#, Python, Java, HTML, CSS, JavaScript. Please feel free to contact me for any enquires.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
