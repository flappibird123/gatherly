"use client"

import { useState } from 'react'
import { createEvent } from '@/actions/events/post'

export default function EventForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        createEvent(title, description);
        setTitle("");
        setDescription("");
    }

    return (
        <div className="max-w-lg mx-auto my-12 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    placeholder="Event title..."
                    className="px-5 py-3 rounded-xl border border-transparent bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white transition-all"
                />
                <textarea
                    value={description}
                    onChange={handleChangeDescription}
                    placeholder="Event description..."
                    rows={5}
                    className="px-5 py-3 rounded-xl border border-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white transition-all resize-none"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
