import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
     
        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");

        const submit=(e) =>{ /*event pass kar rhe */ 
               e.preventDefault(); //page reload nahin hoga
               if(!title || !desc){
                   alert("Title or Description cannot be blank");
               }
               else{
                 addTodo(title,desc);
                 setTitle("");
                 setDesc("");
                 }
               
            }

    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="desc"  className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
        </div>
    )
}

//class ki jagah "className "and htmlFor ki jagah "htmlFor"