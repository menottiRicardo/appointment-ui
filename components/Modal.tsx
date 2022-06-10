import { useMutation } from "@apollo/client";
import { CheckCircleIcon } from "@heroicons/react/outline";
import fi from "date-fns/esm/locale/fi/index.js";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { createAppointment } from "../src/lib/queries";

const Modal = ({ show, _show, createAppointmentInput }: any) => {
  const [create] = useMutation(createAppointment);
  const router = useRouter();
  const [messagePlaca, setMessagePlaca] = useState("");
  const [completed, setCompleted] = useState(false);
  const program = async () => {
    if (createAppointmentInput.placa === "")
      return setMessagePlaca("Debe insertar la placa");

    const cr = await create({
      variables: {
        createAppointmentInput: {
          ...createAppointmentInput,
          date: new Date(createAppointmentInput.date),
        },
      },
    });
    setCompleted(true);
  };
  const fecha = new Date(createAppointmentInput.date);

  const handleClose = () => {
    router.reload();
  };

  if (completed) {
    return (
      <>
        {show && (
          <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-5/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">
              <h1 className="font-bold text-xl text-center text-primary-600">
                Cita agendada
              </h1>
              <div className="flex items-center justify-center mt-8 animate-bounce">
                <CheckCircleIcon className="text-green-600 w-28 " />
              </div>

              <button
                className="bg-green-500 px-5 py-2 rounded-md text-white font-medium text-xl mt-10"
                onClick={handleClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {show && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-5/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">
            <h1 className="font-bold text-xl text-center text-primary-600">
              Estas programando una cita para
            </h1>

            <div className="px-2 mt-4">
              <p className="text-lg">
                placa:{" "}
                <span className="font-bold">
                  {createAppointmentInput.placa}
                </span>
              </p>
              {<p className="text-red-600 font-medium">{messagePlaca}</p>}
              <p className="text-lg mt-2">
                fecha:{" "}
                <span className="font-bold">
                  {fecha.toDateString()} {fecha.toLocaleTimeString()}
                </span>
              </p>
            </div>

            <div className="flex justify-around">
              <button
                className="bg-red-500 px-5 py-2 rounded-md text-white font-medium text-xl mt-10"
                onClick={handleClose}
              >
                Volver
              </button>
              <button
                className="bg-emerald-500 px-5 py-2 rounded-md text-white font-medium text-xl mt-10"
                onClick={program}
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
