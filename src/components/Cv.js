import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

export default function MyCV() {
    return (
        // Added background pattern and dark mode-inspired base for depth
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center overflow-hidden">
            <div
                className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-[1.005] transition duration-500 ease-in-out border border-gray-200"
            >
                {/* Header - Animated */}
                <div className="text-center mb-12 animate-fadeIn">
                    <h1 className="text-5xl font-extrabold text-indigo-700 tracking-tight">
                        Kaushik Borad
                    </h1>
                    <p className="text-xl text-gray-600 font-medium mt-1">
                        Software Developer Intern
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-5 text-gray-700 text-sm">
                        <a href="mailto:kaushikborad238@gmail.com" className="flex items-center gap-2 transition duration-300 text-indigo-600 hover:text-indigo-800">
                            <Mail size={16} /> kaushikborad238@gmail.com
                        </a>
                        <a href="tel:+916352728286" className="flex items-center gap-2 transition duration-300 text-indigo-600 hover:text-indigo-800">
                            <Phone size={16} /> +91 63527 28286
                        </a>
                        <span className="flex items-center gap-2 text-gray-500">
                            <MapPin size={16} /> Surat, Gujarat, India
                        </span>
                    </div>
                </div>

                {/* --- Profile --- */}
                <section className="mb-10 p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg shadow-sm animate-slideInLeft">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-indigo-200 pb-1">
                        Profile
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Motivated BCA graduate with foundational knowledge in **HTML, CSS, JavaScript, React, Node.js, and MySQL**.
                        Passionate about Full Stack Development, I possess a strong desire to learn modern frameworks and implement industry best practices to build robust and scalable web applications.
                    </p>
                </section>

                {/* --- Skills --- */}
                <section className="mb-10 animate-slideInRight">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-1">
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Basic OOP'].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full shadow-sm hover:bg-indigo-200 transition duration-300 cursor-default transform hover:scale-105"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* --- Projects --- */}
                <section className="mb-10 animate-slideInLeft">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-1">
                        Projects
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        {/* Project 1 */}
                        <li className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300">
                            <div className="flex justify-between items-start">
                                <strong className="text-lg text-gray-900">Food Delivery Website (Backend)</strong>
                                <span className="text-sm text-gray-500 font-mono">Feb 2025</span>
                            </div>
                            <p className="text-sm mt-1 italic">
                                Stack: Node.js, Express.js, MongoDB
                            </p>
                        </li>
                        {/* Project 2 */}
                        <li className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300">
                            <div className="flex justify-between items-start">
                                <strong className="text-lg text-gray-900">Food Delivery Website (Frontend)</strong>
                                <span className="text-sm text-gray-500 font-mono">Feb 2025</span>
                            </div>
                            <p className="text-sm mt-1 italic">
                                Stack: ReactJS, Next.js, Bootstrap
                            </p>
                        </li>
                        {/* Project 3 */}
                        <li className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300">
                            <div className="flex justify-between items-start">
                                <strong className="text-lg text-gray-900">Porto Photography (Frontend)</strong>
                                <span className="text-sm text-gray-500 font-mono">Dec 2024</span>
                            </div>
                            <p className="text-sm mt-1 italic">
                                Stack: HTML, CSS, Bootstrap
                            </p>
                        </li>
                    </ul>
                </section>

                {/* --- Education & Course --- */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <section className="animate-slideInUp">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-1">
                            Education
                        </h2>
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <strong className="text-lg text-gray-900">Bachelor of Computer Applications</strong>
                            <p className="text-gray-700">Bhagwan Mahavir College of Computer Applications</p>
                            <span className="text-sm text-gray-500">2021–2024/25</span>
                        </div>
                    </section>

                    <section className="animate-slideInUp">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-1">
                            Course
                        </h2>
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <strong className="text-lg text-gray-900">Full Stack Development Course</strong>
                            <p className="text-gray-700">JBS IT Institute</p>
                            <span className="text-sm text-gray-500">2024–2025</span>
                        </div>
                    </section>
                </div>


                {/* --- Links --- */}
                <div className="flex flex-wrap gap-4 justify-center mt-6 p-4 bg-gray-50 rounded-xl animate-fadeIn">
                    <a href="https://github.com/KB170704" className="flex items-center gap-2 p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition duration-300 transform hover:scale-105" target="_blank" rel="noreferrer">
                        <Github size={20} /> <span className="font-semibold">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/kaushik-borad-8431a533b" className="flex items-center gap-2 p-2 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded-lg transition duration-300 transform hover:scale-105" target="_blank" rel="noreferrer">
                        <Linkedin size={20} /> <span className="font-semibold">LinkedIn</span>
                    </a>
                    <a href="https://kaushik-six.vercel.app/" className="flex items-center gap-2 p-2 text-green-700 hover:text-green-900 hover:bg-green-100 rounded-lg transition duration-300 transform hover:scale-105" target="_blank" rel="noreferrer">
                        <Globe size={20} /> <span className="font-semibold">Portfolio</span>
                    </a>
                </div>
            </div>
        </div>
    );
}