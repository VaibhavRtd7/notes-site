import React, { useState} from 'react'

const CreateArea = (props) => {

  const[note, setNote] = useState({
    title:"",
    content:"",
    pinned:false
  });

  function handleChange(event) {

    const {name, value} = event.target;

    setNote( prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    setNote({
      title:"",
      content:"",
      pinned:false
    })
    
    event.preventDefault();
  }

  return (
    <div>
       <form className="create-note">
         <input name="title" placeholder='Title' value={note.title} onChange={handleChange}/>
         <textarea
           name="content"
           placeholder="Take a note...."
           row='4'
           value={note.content}
           onChange={handleChange}
         /> 

         <button onClick={submitNote}> 
          Add
          </button>
       </form>
    </div>
  )
}

export default CreateArea;