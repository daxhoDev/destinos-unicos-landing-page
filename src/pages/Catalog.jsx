import gift1 from "@/img/gifts/gift1.jpg";
import gift2 from "@/img/gifts/gift2.jpg";
import gift3 from "@/img/gifts/gift3.jpg";
import gift4 from "@/img/gifts/gift4.jpg";
import gift5 from "@/img/gifts/gift5.jpg";
import gift6 from "@/img/gifts/gift6.jpg";
import gift7 from "@/img/gifts/gift7.jpg";
import gift8 from "@/img/gifts/gift8.jpg";
import gift9 from "@/img/gifts/gift9.jpg";
import gift10 from "@/img/gifts/gift10.jpg";
import gift11 from "@/img/gifts/gift11.jpg";
import gift12 from "@/img/gifts/gift12.jpg";
import gift13 from "@/img/gifts/gift13.jpg";
import gift14 from "@/img/gifts/gift14.jpg";
import gift15 from "@/img/gifts/gift15.jpg";
import gift16 from "@/img/gifts/gift16.jpg";
import GiftCard from "@/components/GiftCard";
import { useState } from "react";

const gifts = [
  {
    id: 1,
    image: gift1,
    name: "Alegrías sin fin",
    description:
      "Si no hay sorpresa, hay poca emoción. Los mejores regalos deben sorprender a quienes los reciben por su naturaleza, el momento, su tamaño o por todo lo anterior.",
    category: "fechas",
    precio: 5500,
  },
  {
    id: 2,
    image: gift2,
    name: "Tesoros únicos",
    description:
      "Los mejores regalos están vinculados a momentos, ocasiones, etapas de la vida, obsequiar un hermoso regalo es como recordarle a la persona lo importante y especial que es.",
    category: "fechas",
    price: 4000,
  },
  {
    id: 3,
    image: gift3,
    name: "Delicias entregadas",
    description:
      "Un regalo útil será aquel que tenga un papel importante y frecuente en la vida de las personas especiales. El mejor regalo es el que sorprende a las personas que lo reciben.",
    category: "cumpleaños",
    price: 5000,
  },
  {
    id: 4,
    image: gift4,
    name: "Baratijas felices",
    description:
      "¿Alguna vez te ha sorprendido un regalo? (de cumpleaños, de boda, de graduación o aniversario). El que recibe un pequeño y hermoso detalle es una persona afortunada.",
    category: "fechas",
    price: 2000,
  },
  {
    id: 5,
    image: gift5,
    name: "Paquetes bonitos",
    description:
      "Un regalo perfecto es aquel que se ajusta a la forma de ser de la persona que lo recibe.",
    category: "romanticos",
    price: 5000,
  },
  {
    id: 6,
    image: gift6,
    name: "Momentos especiales",
    description:
      "Hacer entrega de un bello regalo es como servir de puente emocional con el resto de las personas, ya sean amigos, familiares o compañeros de trabajo.",
    category: "cumpleaños",
    price: 4500,
  },
  {
    id: 7,
    image: gift7,
    name: "Brillante y hermoso",
    description:
      "Un regalo es una de las formas tangibles de expresar amor, aprecio, gratitud por contar con personas especiales.",
    category: "romanticos",
    price: 3500,
  },
  {
    id: 8,
    image: gift8,
    name: "Felicidad abundante",
    description:
      "Lo EXCLUSIVO tiene un valor inigualable y único. Por eso, obsequiar un pequeño detalle puede marcar la diferencia y trasmitir emociones.",
    category: "fechas",
    price: 1500,
  },
  {
    id: 9,
    image: gift9,
    name: "Regalando gloria",
    description:
      "Lo AUTÉNTICO hace que todo sea diferente, no pierdas la oportunidad de entregar un regalo único y confeccionado al gusto de cada cliente.",
    category: "cumpleaños",
    price: 5000,
  },
  {
    id: 10,
    image: gift10,
    name: "Saludos alegres",
    description:
      "Tú puedes escoger y ser parte de este Emprendimiento, escogiendo un hermoso presente y no te arrepentirás.",
    category: "cumpleaños",
    price: 1500,
  },
  {
    id: 11,
    image: gift11,
    name: "Felicidad dotada",
    description:
      "El acto de regalar despierta una conexión entre la persona que regala y el destinatario del obsequio, transmitiendo emociones y sentimientos.",
    category: "cumpleaños",
    price: 6500,
  },
  {
    id: 12,
    image: gift12,
    name: "Momentos majestuosos",
    description:
      "Regalar es una forma de expresión y es considerado como uno de los cinco lenguajes del amor.",
    category: "cumpleaños",
    price: 4500,
  },
  {
    id: 13,
    image: gift13,
    name: "Deseos caprichosos",
    description:
      "Dar un regalo puede parecer algo pequeño, pero su impacto es inmenso en quien lo recibe.",
    category: "cumpleaños",
    price: 3500,
  },
  {
    id: 14,
    image: gift14,
    name: "Amuletos de risa",
    description:
      "Pequeños detalles que marcan la diferencia\n\nNo hace falta regalar algo costoso o extravagante. De hecho, los regalos más simples son los que más llegan al corazón.",
    category: "fechas",
    price: 2000,
  },
  {
    id: 15,
    image: gift15,
    name: "Deliciosamente Amoroso",
    description:
      "El poder transformador de un gesto sencillo, se gratifica con el bienestar emocional que genera el acto de regalar, dejando raíces profundas.",
    category: "romanticos",
    price: 2500,
  },
  {
    id: 16,
    image: gift16,
    name: "Gestos grandiosos",
    description:
      "El efecto de hacer un hermoso regalo no termina cuando se realiza la entrega. Ese momento se queda grabado en la memoria de quien lo recibe durante mucho tiempo.",
    category: "cumpleaños",
    price: 5000,
  },
];

const categories = [
  { key: "romanticos", label: "Románticos" },
  { key: "fechas", label: "Fechas Especiales" },
  { key: "cumpleaños", label: "Cumpleaños" },
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("romanticos");
  return (
    <section className="py-12 pt-20 px-4 min-h-[80vh] bg-white flex flex-col items-center">
      <h2 className="text-blue-500 mb-8 text-3xl font-bold text-center">
        Catálogo de Regalos
      </h2>
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`px-6 py-2 rounded-full font-bold border-2 transition-colors duration-200 text-lg cursor-pointer ${
              selectedCategory === cat.key
                ? "bg-gradient-to-r from-blue-500 to-pink-400 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-300 hover:bg-blue-50"
            }`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {gifts
          .filter((g) => g.category === selectedCategory)
          .map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
      </div>
      <p className="mt-8 text-gray-500">
        ¿Buscas algo diferente? ¡Contáctanos para opciones personalizadas!
      </p>
    </section>
  );
}
