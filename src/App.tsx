import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from "./pages/AboutPage";
import { JavascriptPage } from "./pages/JavascriptPage";
import { TodosPage } from './pages/TodosPage';

export const App: React.FC = () => {
  return (
      <BrowserRouter>

        <Navbar />
        <div className="container">
          <Switch >
              <Route component={TodosPage} path="/" exact />
              <Route component={AboutPage} path="/about" exact />
              <Route component={JavascriptPage} path="/javascript" exact />
          </Switch>
        </div>
        
      </BrowserRouter>
  );
}

export default App;
