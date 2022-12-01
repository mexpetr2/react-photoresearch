import React from "react";
import "./App.css";
import SearchPhotos from "./components/SearchPhoto";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search App 📷</h1>
      </div>
      <SearchPhotos />
    </div>
  );
}

export default App;
