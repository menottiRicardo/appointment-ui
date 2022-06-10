import React, { Dispatch, SetStateAction } from "react";

interface TimePickerInterface {
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
}
const TimePicker = ({ time, setTime }: TimePickerInterface) => {
  return (
    <div className="mt-2 p-5">
      <div className="flex w-72">
        <input
          type="time"
          id="appt"
          step="600"
          onChange={(ev) => setTime(ev.target.value)}
          className="bg-transparent outline-none w-full"
        />
      </div>
    </div>
  );
};

export default TimePicker;
