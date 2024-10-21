import React from 'react'

function Note(props) {
 
  const handleDelete = () => {
    console.log(props.id);
    props.onDelete(props.id);
  }

  const handlePin = () => {
    console.log('handlePin button clicked')
    props.onPinned(props.id);
  }

  return (
    <div className='note'>
       <h1> {props.title} </h1>
       <p> {props.content} </p>
       
       <div> 
        <button onClick={handleDelete}> Delete </button>
        <button onClick={handlePin}>  pinned </button>
       </div>
    </div>
  )
}

export default Note