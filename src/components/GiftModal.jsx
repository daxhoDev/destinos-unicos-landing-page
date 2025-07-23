import Button from "@/components/Button";

export default function GiftModal({ gift, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center w-[95dvw] p-8 gap-6 md:flex-row md:w-[80dvw] md:max-w-4xl md:gap-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex items-center justify-center mb-0 md:mr-4 w-full rounded-2xl overflow-hidden h-full bg-gradient-to-br from-blue-500 via-blue-400 to-pink-400 text-white font-bold text-xl">
          <img
            src={gift.image}
            alt={gift.name}
            className="w-full max-h-[50dvh] md:h-full object-cover"
          />
        </div>
        <div className=" flex-1 flex flex-col justify-center">
          <h3 className="mb-2 text-blue-500 text-xl font-bold">
            {gift.name} - ${gift.price}
          </h3>
          <p className="text-gray-800 mb-4">{gift.description}</p>
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}
