import logo from './logo.svg';
import './App.css';
import AddRecipe from './component/AddRecipe';
import SearchRecipe from './component/SearchRecipe';
import AllRecipe from './component/AllRecipe';

function App() {
  return (
    <div >
      <AddRecipe/>
      <SearchRecipe/>
      <AllRecipe/>
    </div>
  );
}

export default App;
