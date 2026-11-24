import Image from "next/image";

export default function Product({ name, src, detail, price }) {
  return (
    <div className="group flex w-80 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-gray-50 p-6">
        <Image
        loading="lazy"
          src={src}
          width={200}
          height={200}
          alt={name || "Product image"}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
            {name}
          </h2>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-500">
            {detail}
          </p>
        </div>

        {/* Footer / Action Area */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          {price && (
            <span className="text-lg font-bold text-gray-900">${price}</span>
          )}
          <button
            type="button"
            className="ml-auto rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 active:scale-95"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}