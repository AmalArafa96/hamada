
import "../Loader/Loading.css"
export default function Loading({ fadeOut }) {
  return (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="logo">AMAL Arafa</h1>
      <div className="spinner"></div>
      <p>Welcome to my Portfolio</p>
    </div>
  );
}