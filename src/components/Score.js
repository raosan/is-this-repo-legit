export default function score() {
  return (
    <div className="box" style={{ marginTop: 50 }}>
      <div className="content">
        <div className="columns">
          <div className="column">
            <h1 className="title has-text-centered">
              Score:
              <span
                className="tag is-success is-large is-rounded"
                style={{ marginLeft: 10 }}
              >
                90 / 100
              </span>
            </h1>
          </div>
          <div className="column">
            <h1 className="title has-text-centered">
              Result:
              <span
                className="tag is-success is-large is-rounded"
                style={{ marginLeft: 10 }}
              >
                LEGIT
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
