import './App.css';
import store from './redux/store';
import * as actions from './redux/actions';

function App() {
  // const unsubscribe= store.subscribe(()=>console.log("store changed",store.getState()));
  //add an bug
  store.dispatch({
   type: actions.BUG_ADDED,
   payload:{ description:"bug 1"}
  });

  //resolve a bug
  store.dispatch({
    type: actions.BUG_RESOLVED,
    payload:{id:0}
  })

  // unsubscribe();
 
  //remove
  // store.dispatch({
  //   type: actions.BUG_REMOVED,
  //   payload: {id:0}
  // })

  console.log(store.getState());
  return (
    <div className="App">
      <header className="App-header">
          getting started with redux
      </header>
    </div>
  );
}

export default App;
