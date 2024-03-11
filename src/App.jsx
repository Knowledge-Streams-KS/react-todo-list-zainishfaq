import React, { useState } from 'react';
import './App.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;





// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   function add(){
//     setCount(count + 1);
//   }

//   function less(){
//     if(count>0)
//     setCount(count-1);
//   }

//   return (
//     <>
//       <h1>Counter</h1>
//       <h1>return count=0? "Zero": count</h1>
//       <button onClick={add}>Add</button>
//       <button onClick={less}>Less</button>
//     </>
//   )
// }

// export default App
