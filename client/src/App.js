import './App.css';
import Sidebar from './Components/Sidebar';
import SIPCalc from './Components/SIPCalc';

function App() {
  return (
    <>
    <div className='super-div'>
      <Sidebar/>
      <div className='leftFull'>
        <button>Back</button>
      <SIPCalc/>
      </div>
    </div>
    </>
  );
}

export default App;
