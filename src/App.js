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

            <div class="columns">
              <div class="column is-8 is-offset-1">
                <input className="input is-medium" type="text" placeholder="Enter a github repo URL" />
              </div>
              <div class="column is-2">
                <button class="button is-primary is-medium is-fullwidth">Run Audit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
