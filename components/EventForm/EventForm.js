"use client"

import { useState } from 'react'
import { createEvent } from '@/actions/events/post'
import { validate } from './FormValidator'

export default function EventForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }
    
    function handleChangeDate(e) {
        setDate(e.target.value);
    }
    
    function handleChangeTime(e) {
        setTime(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(validate(title, description, date, time));
        if (error) {
            return;
        }
        createEvent(title, description);
        setTitle("");
        setDescription("");
        setDate("");
        setTime("");
    }

    return (
<div className="max-w-lg mx-auto my-12 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20">
    <p className="p-2 text-red-500">{error}</p>
    <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
        <input
            type="text"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Event title..."
            className="w-full px-4 py-3 sm:px-5 sm:py-3 rounded-xl border border-transparent bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm sm:text-base"
        />
        <textarea
            value={description}
            onChange={handleChangeDescription}
            placeholder="Event description..."
            rows={5}
            className="w-full px-4 py-3 sm:px-5 sm:py-3 rounded-xl border border-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white transition-all resize-none text-sm sm:text-base"
        />
        <input 
            type="date" 
            className="w-full border rounded-lg p-2 text-sm sm:text-base"
            value={date}
            onChange={handleChangeDate}
        />
        <input 
            type="time" 
            className="w-full border rounded-lg p-2 text-sm sm:text-base" 
            step="60"
            value={time}
            onChange={handleChangeTime}
        />
        <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all cursor-pointer text-sm sm:text-base"
        >
            Submit
        </button>
    </form>
</div>
    );
}
