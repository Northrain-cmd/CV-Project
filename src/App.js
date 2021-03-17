import './css/App.css';
import General from './components/General';
import Education from './components/Education';

function App() {
  return (
    <div className="App container-fluid d-flex justify-content-center">
      <div className="wrapper col-8 col-md-6">
       <h1 className="text-center">Reactive CV</h1>
       <General/>
       <h4 className="text-center mt-4">Education</h4>
       <Education/>
      </div>
      
    </div>
  );
}

export default App;
