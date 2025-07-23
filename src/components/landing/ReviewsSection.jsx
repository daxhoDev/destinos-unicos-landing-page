import ReviewCard from "@/components/landing/ReviewCard";
import clientMaria from "@/img/clients/maria-del-carmen.jpg";
import clientSabrina from "@/img/clients/sabrina.jpg";
import clientYudanis from "@/img/clients/yudanis.jpg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const reviews = [
  {
    id: 1,
    text: "Si quieres vivir una experiencia inolvidable con los sentimientos a flor de piel y el buen gusto contrata los servicios de Yaritza Rodriguez Serrano, en su EMPRENDIMIENTO REGALOS DESTINOS ÚNICOS",
    client: "María Del Carmen",
    picture: clientMaria,
  },
  {
    id: 2,
    text: "Si quieres darle una sorpresa y un momento agradable a tu familiar en Cuba y proporcionarle una felicidad, te recomiendo estas bellezas de detalles, con la mejor, no dudes en contratar el servicio del Emprendimiento Regalos Destinos Únicos, contacta con Yari, lo mejor que vas a encontrar y con unos súper precios.",
    client: "Sabrina",
    picture: clientSabrina,
  },
  {
    id: 3,
    text: "Un día especial de cumpleaños fue extraordinario gracias a un bello obsequio recibido de corazón desde el Emprendimiento REGALOS DESTINOS ÚNICOS. Momento que reunió amigas y emociones en una pequeña caja de regalos: brillo, dulzura, corazones. Derroche de entrega y creatividad. Muchas gracias 🫂🎁🥳🫂",
    client: "Yudanis",
    picture: clientYudanis,
  },
];

export default function ReviewsSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  return (
    <section className="py-8 px-4 pb-16 text-center bg-pink-50" id="reviews">
      <h2 className="text-pink-400 mb-8 text-2xl font-bold">
        Lo que dicen nuestros clientes
      </h2>
      <div className="w-full max-w-2xl mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review) => (
            <div
              className="keen-slider__slide flex justify-center items-center w-full"
              key={review.id}
            >
              <div className="w-full flex justify-center">
                <ReviewCard
                  picture={review.picture}
                  text={review.text}
                  client={review.client}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Controles de navegación */}
        <div className="flex justify-center gap-4">
          <button
            className="bg-pink-400 hover:bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <button
            className="bg-pink-400 hover:bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            onClick={() => instanceRef.current?.next()}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
