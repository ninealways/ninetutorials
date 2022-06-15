import { useState } from 'react';
import './App.css';

function App() {
  const [inputData, setInputData] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }

  const handleAddClick = () => {
    setList([...list, inputData]);
    setInputData('');
  }

  const deleteListItem = (index) => {
    const newList = list.filter((item, ind) => {
      return ind !== index
    });

    setList(newList)
  }

  return (
    <div className="todo-list">
      <input type="text" value={inputData} onChange={(event) => handleInputChange(event)} />
      <button className="go-btn" onClick={handleAddClick}>ADD</button>
      <ul className="my-list">
        {list?.map((item, index) => {
          return <li key={index}>
            {item}
            <button className="edit">Edit</button>
            <button className="delete" onClick={() => deleteListItem(index)}>Delete</button>
            </li>
        })}
      </ul>
    </div>
  );
}

export default App;
