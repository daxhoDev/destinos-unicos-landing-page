export default function ReviewCard({ picture, text, client }) {
  return (
    <div className="review-card">
      <img className="review-picture" src={picture}></img>
      <div className="review-text">“{text}”</div>
      <div className="review-client">- {client}</div>
    </div>
  );
}
