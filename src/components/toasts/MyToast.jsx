import React from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect } from "react";

function MyToast({ title, message, type = "success", duration = 1000  }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.dismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);
  
  return (
<aside
  role={type === "success" ? "status" : "alert"}
  aria-live={type === "success" ? "polite" : "assertive"}
  className={`
    max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto 
    ring-1 ring-black ring-opacity-5
    ${type === "success" ? "border-l-4 border-green-500" : "border-l-4 border-red-500"}
    p-4
    grid grid-cols-[auto_1fr_auto] gap-3 items-start
    sm:p-5 sm:gap-4
  `}
>
  <span
    className={`
      text-xl pt-0.5 flex-shrink-0
      ${type === "success" ? "text-green-600" : "text-red-600"}
    `}
    aria-hidden="true"
  >
    {type === "success" ? "✔️" : "❌"}
  </span>

  <section className="min-w-0">
    <h2 className="text-sm font-semibold text-gray-900 sm:text-base">
      {title}
    </h2>
    <p className="mt-1 text-sm text-gray-600 break-words sm:text-base">
      {message}
    </p>
  </section>

  <button
    onClick={() => toast.dismiss()}
    className="
      flex-shrink-0 text-gray-400 hover:text-gray-600 
      focus:outline-none focus:ring-2 focus:ring-offset-2 
      focus:ring-blue-500 rounded
      transition-colors duration-200
      p-1 -mt-1 -mr-1
    "
    aria-label={`Cerrar notificación: ${title}`}
  >
    <X size={18} className="sm:w-5 sm:h-5" />
  </button>
</aside>
  );
}

export default MyToast;
