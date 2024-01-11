import { SubmitToCSVtest } from './js/functions.js';

function App() {


  return (
    <div className="container">
      <h1>Test Form JS</h1>

      <form>
        <div>
          <label htmlFor="a1">A</label>
          <input type="text" id="a_colonne" />
        </div>
        <div>
          <label htmlFor="a1">B</label>
          <input type="text" id="b_colonne" />
        </div>

        <button type="button" onClick={(event) => SubmitToCSVtest(event)}>Clique</button>


      </form>
    </div>
  );
}

export default App;
