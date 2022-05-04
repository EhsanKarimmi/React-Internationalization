import React from "react";

function App() {
    return (
        <div className="min-h-screen flex flex-col text-white ">
            <div className="bg-red-500">
                <h1>darkmode and select lang</h1>
            </div>
            <main className="container mx-auto text-center flex-1 p-10">
                <header>
                    <h1>Welcome To</h1>
                    <h3>The Github Club</h3>
                </header>
                <div>1,000,000 Members</div>
                <p>Join Our Newsletter</p>
                <p>This page supports English and Persian languages</p>
                <div>
                    <input type="text" />
                    <button> join</button>
                </div>

                <div className="opacity-75">
                    <a href="#">
                        {" "}
                        By subscribing, you agree with Revue's Terms of Service and Privacy Policy.
                    </a>
                </div>
            </main>
            <footer className="flex justify-between items-center p-5">
                <p>Built with react and tailwind by Ehsan Karimi</p>

                <div>
                    <a href="#"> About Us</a>
                    <a href="#">Privacy</a>
                    <a href="#">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
