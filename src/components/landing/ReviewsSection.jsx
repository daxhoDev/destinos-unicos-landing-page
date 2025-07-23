import ReviewCard from "@/components/landing/ReviewCard";
import clientMaria from "@/img/clients/maria-del-carmen.jpg";
import clientSabrina from "@/img/clients/sabrina.jpg";
import clientYudanis from "@/img/clients/yudanis.jpg";

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
    <section className="py-8 px-4 pb-16 text-center bg-pink-50" id="reviews">
      <h2 className="text-pink-400 mb-8 text-2xl font-bold">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
