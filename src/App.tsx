import React, { Suspense } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import "./i18n";

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
