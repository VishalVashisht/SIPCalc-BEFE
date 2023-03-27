import './App.css';
import Sidebar from '../../client/src/Components/sidebar';
import SIPCalc from '../../client/src/Components/index';

function App() {
  return (
    <>
    <div className='leftSideBox'>
      <Sidebar/>
    </div>

    <div className='rightSideBox'>
        <button>Back</button>
      <SIPCalc/>
    </div>
    </>
  );
}

export default App;
