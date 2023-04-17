
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './components/Auth';
import Header from './components/Header'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile'
function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      {isAuthenticated && <Header />}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
 
  );
}

export default App;