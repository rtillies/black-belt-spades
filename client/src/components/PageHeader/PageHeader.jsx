export default function PageHeader({ header }) {
  return (
    <div className="page-header p-4">
      <h1>{header}</h1>
      <button className="btn btn-outline-primary mx-4 page-btn">All Teams</button>
    </div>
  );
}
