```
import { BrowserRouter, Route, lazy } from "react-lazy-router";

const Home = lazy(import("./home"));

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home} fallback={<p>Loading...</p>} />
    </BrowserRouter>
  );
};

```