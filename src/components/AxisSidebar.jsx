export default function AxisSidebar({
    axisOptions,
    selectedAxis,
    onSelectAxis,
  }) {
    return (
      <div>
        <div className="md:hidden flex gap-2 overflow-x-auto mb-6">
          <button
            className={`px-4 py-2 whitespace-nowrap rounded cursor-pointer ${
              selectedAxis === null
                ? "bg-[#fcd249] text-gray-900"
                : "bg-gray-200"
            }`}
            onClick={() => onSelectAxis(null)}
          >
            todos
          </button>
  
          {axisOptions.map((axis) => (
            <button
              key={axis}
              className={`px-4 py-2 whitespace-nowrap rounded cursor-pointer ${
                selectedAxis === axis
                  ? "bg-[#fcd249] text-gray-900"
                  : "bg-gray-200"
              }`}
              onClick={() => onSelectAxis(axis)}
            >
              {axis}
            </button>
          ))}
        </div>
  
        <aside className="hidden md:flex flex-col w-52 shrink-0 border-r pr-6">
          <h3 className="font-bold text-[#4b1252] font-fira uppercase mb-4">Filtrar por eje</h3>
  
          <button
            className={`text-left py-2 px-2 rounded transition cursor-pointer ${
              selectedAxis === null
                ? "bg-[#fcd249] text-gray-900"
                : "hover:bg-gray-100"
            }`}
            onClick={() => onSelectAxis(null)}
          >
            Todos
          </button>
  
          {axisOptions.map((axis) => (
            <button
              key={axis}
              className={`text-left py-2 px-2 rounded transition cursor-pointer ${
                selectedAxis === axis
                  ? "bg-[#fcd249] text-gray-900"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onSelectAxis(axis)}
            >
              {axis}
            </button>
          ))}
        </aside>
      </div>
    );
  }
  