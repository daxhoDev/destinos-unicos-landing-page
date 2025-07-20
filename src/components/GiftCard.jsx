export default function Gift({ name, onClick }) {
  return (
    <div className="gift-card" onClick={onClick}>
      <div className="gift-img-placeholder">Imagen de regalo</div>
      <div className="gift-name">{name}</div>
    </div>
  );
}
