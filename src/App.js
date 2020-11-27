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
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
