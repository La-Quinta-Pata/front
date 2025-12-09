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
    <div
      className={`
        max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5
        ${type === "success" ? "border-green-500" : "border-red-500"}
      `}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            {type === "success" ? (
              <span className="text-green-600 text-xl">✔️</span>
            ) : (
              <span className="text-red-600 text-xl">❌</span>
            )}
          </div>

          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-600">{message}</p>
          </div>

          <button
            onClick={() => toast.dismiss()}
            className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyToast;
