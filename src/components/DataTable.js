import params from "../data/params";

export default function dataTable({data}) {
  console.log(data, 'data')
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data && params.map((item) => (
          <tr key={item.key}>
            <td>{item.label}</td>
            <td>{data[item.key]}</td>
            <td>Good</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
