# Timezone Converter Application
This application allows users to convert time in different timezones, focus on simplicity and user-experience.  features a dark mode, an slider for adjusting time, and ability to add or remove timezones.


## Deployed Application

You can access the deployed application
https://play-powerlabs.vercel.app/

## Features

- **Slider for Time Adjustment:** Adjust the time in a single day using a slider, with labels indicating 3-hour time intervals.
- **Add and Remove Timezones:** Add Easily new timezones to convert time or remove previous TimeZones.
- **Dark Mode:** Toggle between dark and light colors for better user experience.
- **Responsiveness**Application is responsive and works well on diffrent size screen sizes.


## Teck stacks Used
- React
- Moment.js
- Tailwind CSS
- react-beautiful-dnd

## Installation and Setup

1. **Install dependencies:**
    npm install
 
2. **Start the development server:**
    npm start
 
## Folder Structure
timezone-converter/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── TimeSlider.js
│ │ ├── TimezoneComponent.js
│ │ └── TimezoneList.js
│ ├── hooks/
│ │ └── useTimezones.js
│ ├── pages/
│ │ ├── Home.js
│ │ └── WholeComponent.js
│ ├── styles/
| | └── Home.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md


1. **Adding a new Timezone:**
    - Select a timezones from the dropdown menu and click the "Add" button.
    - The timezone will be added to the list of timezones.
2. **Removing a Timezone:**
    - Click the "Remove" button ('X' icon) to remove it from the list.
3. **Adjusting Time:**
    - Use the slider thumb under each timezone to adjust the time in a single day. 
4. **Toggle Dark Mode:**
    - Click the sun or moon icon to toggle between dark and light themes.
