import { Switch, Route } from 'react-router-dom';

import { Home, Subject } from './views';
import { Navigation } from './components';


function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route path="/subjects/:id/notes" component={Subject}/>
        <Route path="/subjects" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
