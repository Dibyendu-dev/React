// eslint-disable-next-line react/prop-types
export default function Panel({ title, children, active, onActive }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {active ? <p>{children}</p> : <button onClick={onActive}>Show</button>}
    </section>
  );
}
