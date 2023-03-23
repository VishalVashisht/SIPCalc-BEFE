import "../../client/src/App.css";
import Sidebar from "../../client/src/Components/sidebar.jsx";
import SIPCalc from '../../client/src/Components/index.jsx';

function App() {
  return (
    <>
    <div className='super-div'>
      <Sidebar/>
      <div className='rightFull'>
        <button>Back</button>
      <SIPCalc/>
      </div>
    </div>
    </>
  );
}

export default App;
