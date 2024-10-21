import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea  from "./components/CreateArea";
import Note from "./components/Note";

function App() {
  
  const[notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(
      prevNotes => {
        return [...prevNotes, newNote];
      }
    )
  }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  function deleteNote(id){

    setNotes(
      prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        })
      }
      )
        // console.log(notes);
  }
   

  // function to toggle pin/unpin note
  const togglePinNote = (noteId) => {
    console.log('In togglePinNote noteID :- ', noteId)
    const updatedNotes = notes.map( (note, index) => 
      index === noteId ? { ...note, pinned : !note.pinned } : note
    );
    setNotes(updatedNotes);
    // console.log('Updated Notes :- ', notes)
  }

  const pinnedNotes = notes.filter((note) => note.pinned);
  const regularNotes = notes.filter((note) => !note.pinned);
  // console.log('PinnedNotes ::- ', pinnedNotes);
  // console.log('regularNotes ::- ', regularNotes);

  return (
    <div>   
       <Header /> 
       <CreateArea  onAdd={addNote}/>  
       
       <h2>Pinned Notes</h2>
        {pinnedNotes.length === 0 ? (
          <p>No pinned notes</p>
          ) : (
            pinnedNotes.map((note, index) => (
              <div key={note.id} className={`note ${note.pinned ? "pinned" : ""}`}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <button onClick={() => togglePinNote(index)} className="">
                  {note.pinned ? "Unpin" : "Pin"}
                </button>
              </div>
            ))
          )}
        
        <h2> Other Notes</h2>
        {
          regularNotes.length === 0 ? (
          <p>No notes available</p>
          ) : (

          regularNotes.map((noteItem, index) => {
            return (
            <Note 
               key={index}
               id={index}
               title={noteItem.title}
               content={noteItem.content}
               onDelete={deleteNote}
               onPinned={togglePinNote}
            />
          )
        })
      )}

       <Footer />
    </div>
  );
}

export default App;
