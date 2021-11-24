import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { LandPage } from "./Components/LandPage/LandPage";
import { RecipeDetail } from "./Components/RecipeDetail/RecipeDetail";
import { RecipeCategory } from "./Components/RecipeCategory/RecipeCategory";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LandPage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/category/:title" element={<RecipeCategory />} />
      </Routes>
    </div>
  );
}

export default App;
