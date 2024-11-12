/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="my-4 max-w-lg mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg text-center text-gray-200">
            <h2 className="text-4xl font-extrabold mb-6 text-purple-500">Contact <span className='text-white'>Me</span></h2>
            <p className="text-lg text-gray-400 mb-8">I'd love to hear from you! Feel free to reach out with any questions or enquires.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-transparent text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-transparent text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-transparent text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        rows={4}
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
