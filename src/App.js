import Message from './Components/Message';

import './App.css';

function App({txt}) {
  return (
    <div className="App-header">
        <Message txt = {txt}/>
        <Message txt = {txt}/>
        <Message txt = {txt}/>
        <Message txt = {txt}/>
    </div>
  );
}

export default App;

