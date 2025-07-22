import Button from "@/components/Button";

export default function GiftModal({ gift, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl flex flex-col w-[95vw] max-w-md p-8 gap-6 md:flex-row md:w-[540px] md:max-w-[90vw] md:gap-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center mb-0 md:mr-4">
          <div
            className="w-28 h-28 bg-gradient-to-br from-blue-500 via-blue-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
            style={{ fontSize: "1.3rem" }}
          >
            Imagen de regalo
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-2 text-blue-500 text-xl font-bold">{gift.name}</h3>
          <p className="text-gray-800 mb-4">{gift.description}</p>
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}
