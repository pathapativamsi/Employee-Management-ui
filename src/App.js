import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeelist" element={<EmployeeList />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
          <Route path="/updateemployee/:id" element={<EditEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
