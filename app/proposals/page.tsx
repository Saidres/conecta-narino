import * as React from "react";

export default function proposals() {
  return (
    <section className="grid grid-cols-1 gap-4 pt-20 px-4 sm:px-9">
      <article className="border-2 border-spring-green-500 rounded-md p-4 flex flex-col sm:flex-row justify-between items-center bg-white shadow-md">
        <div className="flex flex-col space-y-2 sm:space-y-4">
          <h1 className="text-lg font-bold text-gray-800">Título</h1>
          <div className="flex">
          <button className="rounded-full bg-spring-green-400 p-1 mr-1">Senderismo</button>
          <button className="rounded-full bg-spring-green-400 p-1 mr-1">Natación</button>
          </div>
          <p className="text-sm text-gray-600">Descripción</p>
          <p className="text-sm text-gray-600">Actividades</p>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">&#128222;</span>
            <p className="text-sm text-gray-600">Llamar</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gray-200 flex justify-center items-center rounded-md">
            <span className="text-gray-400 text-3xl">&#128506;</span>
          </div>
        </div>
      </article>
    </section>
  );
}
