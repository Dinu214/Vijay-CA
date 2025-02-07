const PlaceholderPage = ({ title, message }) => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;