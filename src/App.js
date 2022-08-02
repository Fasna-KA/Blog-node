import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import ReadMorePage from "./pages/ReadMorePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bollywood" element={<BlogPage category="Bollywood" />} />
            <Route path="/technology" element={<BlogPage category="Technology" />} />
            <Route path="/hollywood" element={<BlogPage category="Hollywood" />} />
            <Route path="/fitness" element={<BlogPage category="Fitness" />} />
            <Route path="/food" element={<BlogPage category="Food" />} />
            <Route path="/category/:id" element = {<ReadMorePage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;