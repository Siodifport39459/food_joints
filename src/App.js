import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';
import Food from './pages/food/food.component'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage} />
      <Route exact path='/food' component={Food} />
    </div>
  );
}

export default App;
