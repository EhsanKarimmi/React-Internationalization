import React, { useState } from "react";

function App() {
    const [language, setLanguage] = useState("EN");
    return (
        <div className="min-h-screen flex flex-col text-white ">
            <div className="flex justify-end items-center px-5 py-2">
                <button className=" bg-gray-500 bg-opacity-50 hover:bg-opacity-100 rounded-full px-2 py-1 text-xl font-medium transition-all ease-linear duration-200">
                    {language === "EN" ? "FA" : "EN"}
                </button>
            </div>
            <main className="container mx-auto text-center flex-1 p-5">
                <header className="mb-5">
                    <h1 className="font-bold text-5xl uppercase">Welcome To</h1>
                    <h3 className="text-3xl uppercase">The Github Club</h3>
                </header>
                <div className="bg-gray-500 inline-block p-3 rounded-3xl bg-opacity-50 font-medium ">
                    1,000,000 Members
                </div>
                <p className="font-medium text-xl my-3 uppercase">Join Our Newsletter</p>

                <div className="my-6">
                    <input
                        type="email"
                        className="text-xl font-medium p-4 w-1/4 bg-gray-300 text-black focus:outline-none rounded-l-3xl"
                        placeholder="Enter Email"
                    />
                    <button className="bg-gray-500 hover:bg-[#2C5BAF] transition-all ease-linear duration-200 p-4 text-xl font-medium rounded-r-3xl">
                        {" "}
                        JOIN
                    </button>
                </div>

                <div className="mt-56 text-base  space-y-3">
                    <p>
                        By subscribing, you agree with Revue's{" "}
                        <a href="#" className="text-blue-500">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-500">
                            Privacy Policy
                        </a>
                        .
                    </p>
                    <p>This page supports English and Persian languages</p>
                </div>
            </main>
            <footer className="flex justify-between items-center p-5 ">
                <p className="font-medium">Built With React and Tailwind by EhsaN Karimi</p>

                <div className="flex justify-center items-center gap-5 px-5 text-blue-500">
                    <a href="#"> About Us</a>
                    <a href="#">Privacy</a>
                    <a href="#">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
