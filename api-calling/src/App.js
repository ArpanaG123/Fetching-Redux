import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchData } from './redux/slice/productData';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchData())}>Fetched Products</button> 
    </div>
  );
}

export default App;
