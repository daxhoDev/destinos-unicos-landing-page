export default function GiftModal({ gift, onClose }) {
  return (
    <div className="gift-modal-backdrop" onClick={onClose}>
      <div className="gift-modal" onClick={e => e.stopPropagation()}>
        <div className="gift-modal-img">
          <div className="gift-img-placeholder" style={{ width: 120, height: 120, fontSize: '1.3rem' }}>
            Imagen de regalo
          </div>
        </div>
        <div className="gift-modal-info">
          <h3>{gift.name}</h3>
          <p>{gift.description}</p>
          <button className="see-more-btn" onClick={onClose} style={{ marginTop: '1.5rem' }}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
} 