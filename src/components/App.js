import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
//Array to store the notes
  const [notes, setNotes] = useState([]);

  //Adds new note to the notes array
  function addNote(newNote) {
    setNotes(prevNotes => {
     return [...prevNotes, newNote];
    });
   }

   //deletes note from notes array
   function deleteNote(id) {
     setNotes(prevNotes => {
       return prevNotes.filter((gratitudeItem, index) => {
return index !== id;
       })
     })
   }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((gratitudeItem, index) => (
        <Note
          key={index}
          id={index}
          title={gratitudeItem.title}
          content={gratitudeItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
