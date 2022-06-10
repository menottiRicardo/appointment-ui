import { Dispatch, SetStateAction, useState } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import es from "date-fns/locale/es";

interface DateInputInterface {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date>>;
}
const DateInput = ({ date, setDate }: DateInputInterface) => {
  let footer = <p>Porfavor selecione una fecha.</p>;
  if (date) {
    footer = (
      <p className="font-bold mt-2">
        Usted Escogio {format(date, "PPP", { locale: es })}.
      </p>
    );
  }
  return (
    <div className="flex justify-center">
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate as any}
        footer={footer}
        locale={es}
      />
    </div>
  );
};
export default DateInput;
