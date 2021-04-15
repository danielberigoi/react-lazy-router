# React Router Lazy

## Summary
Provides the ability to subscribe React components to defined topics.
Wrapper over `react-router-dom` providing lazy load (code-splitting) capability

### Getting started

```bash
npm install react-lazy-router
```

### Example

```javascript
import { BrowserRouter, Route, lazy } from "react-lazy-router";

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
- Exposes a `lazy` method by wrapping the original `React.lazy` method