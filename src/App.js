import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage} />
    </div>
  );
}

export default App;
