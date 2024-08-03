import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import '../styles/Home.css';
import { useTimezones } from '../hooks/useTimezones';
import WholeComponent from './WholeComponent';

function Home() {
    const [darkMode, setDarkMode] = useState("white");
    const [newTimezone, setNewTimezone] = useState('');
    const [message, setMessage] = useState('');
    const { timezones, addTimezone, removeTimezone, reorderTimezones, reverseTimezones } = useTimezones();
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        setDarkMode(pre => pre == "white" ? "#4c657e" : "white")
    }, []);
    localStorage.setItem("color", darkMode)
    const toggleDarkMode = () => {
        setDarkMode(pre => pre === "#4c657e" ? "white" : "#4c657e");
    };


    const handleAddTimezone = () => {
        try {
            addTimezone(newTimezone);
            setNewTimezone('');
            alert('Timezone added successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            alert(error.message);
        }
    };



    const handleReverseTimezones = () => {
        console.log("Reverse button clicked");
        reverseTimezones();
    };

    useEffect(() => {
        console.log("Timezones updated:", timezones);
    }, [timezones]);


    return (
        <div style={{ backgroundColor: darkMode }} className={darkMode ? 'dark' : ''}>
            <div className='mainHomepage text-gray-900 dark:text-gray-100 p-4'>
                <div className='Home_main'>
                    <h1 style={{ color: (darkMode === "white") ? "black" : "white" }} className='text-3xl font-bold '>UTC to IST Converter</h1>
                    <hr className='my-4' />

                    <nav>
                        <div>
                            <div style={{ color: (darkMode === "white") ? "black" : "white" }} className='flex gap-7'>
                                <Link to="/" className='hover:underline'>Converter</Link>
                                <Link to="/time-difference" className='hover:underline'>Time Difference</Link>
                                <Link to="/table" className='hover:underline'>Table</Link>
                                <Link to="/utc" className='hover:underline'>UTC</Link>
                                <Link to="/ist" className='hover:underline'>IST</Link>
                            </div>
                        </div>
                    </nav>

                    <hr className='my-4' />
                </div>

                <div className='navbarMain flex flex-col md:flex-row justify-between items-center mt-4'>
                    <div className='Navbar_inner_first flex items-center gap-2'>
                        <select
                            className=' seleteInput p-2 border text-black rounded dark:bg-gray-700 dark:border-gray-600'
                            value={newTimezone}
                            onChange={(e) => setNewTimezone(e.target.value)}
                        >
                            <option value="">Select timezone</option>
                            <option value="New York">New York</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                            <option value="Tokyo">Tokyo</option>
                            <option value="Sydney">Sydney</option>
                        </select>

                        <button
                            onClick={handleAddTimezone}
                            className='btn border-none p-2 text-white rounded hover:bg-purple-200'
                        >
                            <img src="https://cdn-icons-png.flaticon.com/128/8571/8571550.png" alt="" />
                        </button>
                    </div>

                    <div className='Navbar_inner_second mt-2 md:mt-0'>
                        <input type="date" className='p-2 text-black border rounded dark:bg-gray-700 dark:border-gray-600' />
                    </div>

                    <div className='Navbar_inner_third flex gap-2 mt-2 md:mt-0'>
                        <button className='googleMeet btn p-2 border-none text-white rounded hover:bg-purple-200'>
                            <img src="https://cdn-icons-png.flaticon.com/128/1827/1827319.png" alt="" />
                        </button>
                        <button onClick={handleReverseTimezones} className='re_Arrange_List btn border-none p-2 text-white rounded hover:bg-purple-200'>
                            <img src="https://cdn-icons-png.flaticon.com/128/17151/17151417.png" alt="" />
                        </button>
                        <button
                            className=' btn p-2 border-none text-white rounded hover:bg-purple-200'
                        >
                            <img src="https://cdn-icons-png.flaticon.com/128/17053/17053663.png" alt="" />
                        </button>
                        <button
                            className='btn p-2 border-none text-white rounded hover:bg-purple-200'
                            onClick={toggleDarkMode}
                        >
                            {darkMode === 'black' ? <img src="https://cdn-icons-png.flaticon.com/128/2338/2338119.png" alt="" /> : <img src="https://cdn-icons-png.flaticon.com/128/6321/6321499.png" alt="" />}
                        </button>
                    </div>
                </div>

                {message && <div className='text-blue-800 mt-4'>{message}</div>}

                <div>
                    <WholeComponent
                        timezones={timezones}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        removeTimezone={removeTimezone}
                        reorderTimezones={reorderTimezones}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
