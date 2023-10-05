import './App.css'
import logo from './images/logo.svg';
import illustrationDashboard from './images/illustration-dashboard.png';
import facebookLogo from './images/logo-facebook.svg';
import twitterLogo from './images/logo-twitter.svg';
import instagramLogo from './images/logo-instagram.svg';


function App() {
  return (
    <div>
      <img src={logo}/>
      <h1>We are launching <span>soon!</span></h1>
      <p>Subscribe and get notified</p>
      <input 
        id='email'
        className='input'
        name='email'
        placeholder='Your email address...'
      />
      <button className='button'>Notify Me</button>

      <img src={illustrationDashboard}/>

      <footer>
        <div className='flex-container'>
          <div className='icon-circle'><img className='icon' src={facebookLogo}/></div>
          <div className='icon-circle'><img className='icon' src={twitterLogo}/></div>
          <div className='icon-circle'><img className='icon' src={instagramLogo}/></div>
        </div>
        <p>© Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
