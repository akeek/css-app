import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams, Link } from 'react-router-dom';

function Home() {
    return <div>Home</div>;
  }

export const Todo = () => {

    const [todo, setTodo] = useState({});
    let { id } = useParams();

    useEffect(() => {
        async function getData(url) {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json)
            setTodo(json);
          } catch (error) {
            console.log(error);
          }
        }
    
        getData(`https://jsonplaceholder.typicode.com/todos/${id}`);
      }, [id]);


  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

function Stuff() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/todo/4">Todo with ID: 4</Link>
                </li>
            </ul>
        </div>
    )
}

function App13() {
    return (
        <div>
            <Stuff />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/todo/:id" element={<Todo />} />
            </Routes>
        </div>
    );
  }
  
  export default App13;