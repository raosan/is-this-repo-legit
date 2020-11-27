import "./App.css";
import 'bulma/css/bulma.css'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Measure
            </h1>
            <h2 className="subtitle">
              Find out is this repo legit
            </h2>

            <div className="columns">
              <div className="column is-8 is-offset-1">
                <input className="input is-medium" type="text" placeholder="Enter a github repo URL" />
              </div>
              <div className="column is-2">
                <button className="button is-info is-outlined is-medium is-fullwidth">Run Audit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              Result: 
              <span class="tag is-success is-large" style={{marginLeft: 10}}>LEGIT</span>
            </h1>
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>
                    Parameter
                  </th>
                  <th>
                    Value
                  </th>
                  <th>
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Count</td>
                  <td>30</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>Star Count</td>
                  <td>30</td>
                  <td>Good</td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
      </section>
    </div>
  );
}

export default App;
