import React from 'react';
import moment from 'moment-timezone';
import { AiOutlineClose } from 'react-icons/ai';
import TimeSlider from './TimeSlider';

const TimezoneComponent = ({ timezone, currentTime, setCurrentTime, removeTimezone }) => {
  const formattedTime = moment(currentTime).tz(timezone.name).format('hh:mm A');
  const formattedDate = moment(currentTime).tz(timezone.name).format('ddd, MMM D');
  const darkMode = localStorage.getItem("color");


  return (
    <div style={{ backgroundColor: (darkMode === "white") ? "white" : "#6a759b" }} className=" timeZone_component h-44 p-4 mb-4 w-3/4 m-auto shadow-lg rounded-lg border border-gray-300">
      <div className="flex justify-between items-start ">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{timezone.name}</h2>
        </div>
        <button onClick={() => removeTimezone(timezone.id)} className="text-red-600">
          <AiOutlineClose />
        </button>
      </div>
      <div className="flex justify-end -mt-6">
        <div className="text-right">
          <div className="flex justify-between w-96 border-blue-500 rounded-lg p-2 mr-24 mb-1 ">
            <h3 className="  font-normal text-gray-600">{formattedDate}</h3>
            <h5 className= "border-2 text-lg font-medium text-gray-800">{formattedTime}</h5>
          </div>
        </div>
      </div>
      <TimeSlider timezone={timezone.name} currentTime={currentTime} setCurrentTime={setCurrentTime} />
    </div>
  );
};

export default TimezoneComponent;
