import { Switch, Route } from 'react-router-dom';

import { Home, Subject } from './views';
import { Header, Navigation, Logo, Footer } from './components';

import { GlobalStyles, Layout, Page } from './style';


function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Page>
        <Switch>
          <Route path="/subjects/:id/notes" component={Subject}/>
          <Route path="/subjects" exact component={Home}/>
          <Route path="/subjects" exact component={Home}/>
        </Switch>
      </Page>
      <Footer />
    </Layout>
  );
}

export default App;
