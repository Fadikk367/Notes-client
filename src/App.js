import { Switch, Route } from 'react-router-dom';

import { Home, Subject, About } from './views';
import { Header, Navigation, Logo, Footer } from './components';

import { GlobalStyles, Layout, Main, Page } from './style';


function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Main>
        <Page>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/subjects/:id/notes" component={Subject}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Page>
        <Footer />
      </Main>
    </Layout>
  );
}

export default App;
