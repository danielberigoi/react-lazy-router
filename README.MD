# React Lazy Router

## Summary
Provides the ability to lazy-load `react router` route components.
It's a wrapper over `react-router-dom` providing code-splitting capability.

### Getting started

```bash
npm install react-lazy-router
```

### Usage

```javascript
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-lazy-router";

const Home = React.lazy(() => import("./Home"));
const Hello = React.lazy(() => import("./Hello"));

const Loading = <p>Loading...</p>;

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link> <Link to="/hello">Hello</Link>
      <Switch>
        <Route path="/" component={Home} fallback={Loading} exact />
        <Route path="/hello" fallback={Loading} exact>
          <Hello name="there" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

```

### How it works

- Exports everything from `react-router-dom` by default
- Overwrites the `Route` component by wrapping the original `Route` in `React.Suspense`

### Sandbox
- https://codesandbox.io/s/react-lazy-router-wv65f