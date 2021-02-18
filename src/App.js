import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [student, setStudent] = useState(data);
  return (
    <Router>
      <main>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home}>
            <section className="container">
              <h2>Attendance List for {student.length} students</h2>
              <List student={student}/>
              <button onClick = {()=>setStudent([])}>Clear list</button>
            </section>
          </Route>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
