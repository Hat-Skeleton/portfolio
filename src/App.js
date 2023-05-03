import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Cody Couper",
    location: "Invercargill, NZ",
    email: "codydpc@gmail.com",
    availability: "Open for work",
    brand:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus ultricies turpis. Maecenas varius, est a semper fringilla, diam arcu malesuada nibh, et pellentesque lacus leo aliquet leo. Nam malesuada felis dolor, sit amet tristique dolor gravida id. Sed sapien orci, ullamcorper et eros at, iaculis lacinia nibh. Suspendisse ultrices faucibus laoreet. Duis placerat purus sed consequat mattis. Nunc eleifend sagittis lorem eget hendrerit. Vivamus facilisis est posuere turpis bibendum, in eleifend purus gravida. Sed non faucibus elit, non accumsan leo. Mauris porta elit ut velit aliquet feugiat ut eu dui. Duis ut tellus felis.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
