import React, { useState } from 'react';

const Buttons = ({ onUndo, onErase, onToggleNotes, onGetHint }) => {
  const [notesOn, setNotesOn] = useState(false);

  const toggleNotes = () => {
    setNotesOn(!notesOn);
    onToggleNotes(!notesOn); // Call the provided prop function with the updated state
  };

  return (
    <div className="fixed bottom-5 w-full bg-gray-800 p-4 flex justify-around">
      <button className="text-white" onClick={onUndo}>Undo</button>
      <button className="text-white" onClick={toggleNotes}>
        {notesOn ? 'Notes On' : 'Notes Off'}
      </button>
      <button className="text-white" onClick={onGetHint}>Hint</button>
      <button className="text-white" onClick={onErase}>Check Board</button>
    </div>
  );
};

export default Buttons;
