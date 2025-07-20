import ReviewCard from "@/components/ReviewCard";
import clientMaria from "@/img/client-maria-del-carmen.jpg";
import clientSabrina from "@/img/client-sabrina.jpg";
import clientYudanis from "@/img/client-yudanis.jpg";

const reviews = [
  {
    id: 1,
    text: "¡Selección de regalos increíble y entrega rápida!",
    client: "María Del Carmen",
    picture: clientMaria,
  },
  {
    id: 2,
    text: "Empaque hermoso y excelente servicio.",
    client: "Sabrina",
    picture: clientSabrina,
  },
  {
    id: 3,
    text: "¡Mi tienda favorita para regalos!",
    client: "Yudanis",
    picture: clientYudanis,
  },
];

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            picture={review.picture}
            text={review.text}
            client={review.client}
          />
        ))}
      </div>
    </section>
  );
}
