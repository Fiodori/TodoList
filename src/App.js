import React, { Suspense } from "react";
import Router from "components/Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
