import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/Login";
import { Signup } from "./component/Signup";
import { AddNotes } from "./component/AddNotes";
import { Note } from "./component/Note";

function App() {
  return (
    <div className="App">
      <h1>Notes Taking Application</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createNote" element={<AddNotes />} />
        <Route path="/notes" element={<Note />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
