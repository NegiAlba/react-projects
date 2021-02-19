import './App.css';
import Navbar from './components/navbar/Navbar';       
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const routes = [ 
  { path:"/", name:"Home", Component:Home},
  { path:"/projects", name:"Projects", Component:Projects},
  { path:"/contact", name:"Contact", Component:Contact}
]

function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <section className="container">
        <Switch>
            {routes.map(({path, Component})=>(
              <Route key={path} exact path={path}>
                {()=> (
                    <div className="page">
                      <Component/>
                    </div>
                )}
              </Route>
            ))}
        </Switch>
        </section>
      </main>
    </Router>
  );
}

export default App;
