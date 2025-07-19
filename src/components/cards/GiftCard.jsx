export default function GiftCard({ name, onClick }) {
  return (
    <div className="gift-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="gift-img-placeholder">Imagen de regalo</div>
      <div className="gift-name">{name}</div>
    </div>
  );
} 