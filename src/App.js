import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
 if(localStorage.getItem("todos")===null){
     initTodo=[];
 }
 else{
   initTodo = JSON.parse(localStorage.getItem("todos"));
   
 }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding this Todo",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
       sno = todos[todos.length-1].sno +1;
    }
   
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
       
  
  }

  const  [todos, setTodos] = useState(initTodo);         //State hook - for deleting u need to use hooks 
    // {
    //   sno:1,
    //   title:"Go to market",
    //   desc:"You need to go to market to get job done"
    // },
    
    // {
    //   sno:2,
    //   title:"Go to mall",
    //   desc:"You need to go to mall to get job done"
    // },

    // {
    //   sno:3,
    //   title:"Go to school",
    //   desc:"You need to go to school to get job done"
    // },
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
 
  return (
<>  
 <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>
          <Route  path="/" element={ <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>} /> 
          
          <Route  path="/about" element={<About/>} />
        </Routes> 
      <Footer />
    </Router>
</>

   
  );
}

export default App;
