import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/home/Home'
import Events from './pages/events/eventsIndex'
import Event24 from "./pages/events/2024/Event_24.js"
import Event23 from "./pages/events/2023/Event_23.js"
import Event22 from "./pages/events/2022/Event_22.js"
import Event21 from "./pages/events/2021/Event_21.js"
import Event19 from "./pages/events/2019/Event_19.js"
import Event16 from "./pages/events/2016/Event_16.js"
// import './App.css';
function App() {
  return (
    <Router>
      <Routes> 
        {/* <Route path="/" element = {<Home/>}/> */}
        <Route path="/Events" element={<Events/>} />
        <Route path="/Events/2024" element={<Event24/>} />
        <Route path="/Events/2023" element={<Event23/>} />
        <Route path="/Events/2022" element={<Event22/>} />
        <Route path="/Events/2021" element={<Event21/>} />
        <Route path="/Events/2019" element={<Event19/>} />
        <Route path="/Events/2016" element={<Event16/>} />
      </Routes>
    </Router>

  );
}

export default App;
