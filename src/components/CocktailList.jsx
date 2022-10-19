// import React, { Component } from 'react'

// export default class CocktailList extends Component {
//     render() {
//         return (
//             <div>

//                 oui

//             </div>
//         )
//     }
// }

import React, { useState } from "react";
import { drinks } from "../functions/store";
const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Fill Details
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Choisir vos cocktails</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        {renderCocktailList()}
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

function renderCocktailList() {
    
    return (
        drinks.map(d => {
            return (
            <div className="grid grid-cols-8 py-3">
            <label className="block text-black text-sm font-bold mb-1 col-span-6 pt-2">
                {d.name}
            </label>
            <input type="number" className="shadow appearance-none border rounded w-full py-1 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1 col-span-1 pl-5 pt-2">
                {d.price} €
            </label>
        </div>
        )})
    )
}

export default Modal;