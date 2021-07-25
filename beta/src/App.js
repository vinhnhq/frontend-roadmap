import React from "react";

const AlphaButton = React.lazy(() => import("alpha/Button"));

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div>
        <React.Suspense fallback="Loading Button">
          <AlphaButton />
        </React.Suspense>
      </div>
      <h2>MFE2</h2>
    </div>
  );
}

export default App;
