export default function AxisSidebar({ axisOptions, selectedAxis, onSelectAxis }) {
  return (
    <section aria-label="Filtro por eje temático">
      <ul className="md:hidden flex gap-2 overflow-x-auto mb-6 list-none p-0">
        <li>
          <button
            type="button"
            onClick={() => onSelectAxis(null)}
            aria-pressed={selectedAxis === null}
            className={`px-4 py-2 whitespace-nowrap rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              selectedAxis === null
                ? "bg-[#fcd249] text-gray-900 font-semibold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Todos
          </button>
        </li>

        {axisOptions.map((axis) => (
          <li key={axis}>
            <button
              type="button"
              onClick={() => onSelectAxis(axis)}
              aria-pressed={selectedAxis === axis}
              className={`px-4 py-2 whitespace-nowrap rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                selectedAxis === axis
                  ? "bg-[#fcd249] text-gray-900 font-semibold"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {axis}
            </button>
          </li>
        ))}
      </ul>

      <section className="hidden md:flex md:flex-col md:w-52 md:shrink-0 md:border-r md:pr-6">
        <h3 className="font-bold text-[#4b1252] font-fira uppercase mb-4 text-sm sm:text-base">
          Filtrar por eje
        </h3>

        <ul className="flex flex-col gap-1 list-none p-0">
          <li>
            <button
              type="button"
              onClick={() => onSelectAxis(null)}
              aria-pressed={selectedAxis === null}
              className={`w-full text-left py-2 px-3 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                selectedAxis === null
                  ? "bg-[#fcd249] text-gray-900 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Todos
            </button>
          </li>

          {axisOptions.map((axis) => (
            <li key={axis}>
              <button
                type="button"
                onClick={() => onSelectAxis(axis)}
                aria-pressed={selectedAxis === axis}
                className={`w-full text-left py-2 px-3 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedAxis === axis
                    ? "bg-[#fcd249] text-gray-900 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {axis}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}