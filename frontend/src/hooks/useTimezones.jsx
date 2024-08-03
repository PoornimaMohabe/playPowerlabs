import { useState } from 'react';
import moment from 'moment-timezone';

const cityToTimezone = {
  'Kolkata': 'Asia/Kolkata',
  'New York': 'America/New_York',
  'London': 'Europe/London',
  'Paris': 'Europe/Paris',
  'Tokyo': 'Asia/Tokyo',
  'Sydney': 'Australia/Sydney',
  'Los Angeles': 'America/Los_Angeles',

};

export const useTimezones = () => {
  const initialTimezones = [
    { id: '1', name: 'UTC' },
    { id: '2', name: 'IST' },
  ];

  const [timezones, setTimezones] = useState(initialTimezones);
  const addTimezone = (newCity) => {
    const timezoneName = cityToTimezone[newCity];
    if (!timezoneName) {
      throw new Error('Invalid city name. Please enter a valid city.');
    }

    setTimezones([
      ...timezones,
      { id: (timezones.length + 1).toString(), name: timezoneName },
    ]);
  };

  const removeTimezone = (timezoneId) => {
    setTimezones(timezones.filter((tz) => tz.id !== timezoneId));
  };

  const reorderTimezones = (startIndex, endIndex) => {
    const result = Array.from(timezones);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTimezones(result);
  };

  const reverseTimezones = () => {
    console.log("Reversing timezones");
    setTimezones(prevTimezones => [...prevTimezones].reverse());
  };

  return { timezones, addTimezone, removeTimezone, reorderTimezones, reverseTimezones };
};
