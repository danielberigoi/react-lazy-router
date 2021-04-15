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
import { BrowserRouter, Route, lazy } from "react-lazy-router";

const Home = lazy(import("./components/Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home} fallback={<p>Loading...</p>} />
    </BrowserRouter>
  );
};
```

### How it works

- Exports everything from `react-router-dom`
- Overwrites the `Route` component by wrapping the original `Route` in `React.Suspense`
- Exposes a `lazy` method by wrapping the default `React.lazy` method