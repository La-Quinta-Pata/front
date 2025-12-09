import React from "react";
import toast from "react-hot-toast";

export default function ConfirmToast({ message, onConfirm }) {
    return (
        <section className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5 p-3">            <p className="font-semibold text-gray-900 mb-2">{message}</p>

            <div className="flex justify-center gap-3">
                <button
                    onClick={() => toast.dismiss()}
                    className="px-3 py-1 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 cursor-pointer"
                >
                    Cancel
                </button>

                <button
                    onClick={() => {
                        toast.dismiss();
                        onConfirm();
                    }}
                    className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </section>
    );
}
