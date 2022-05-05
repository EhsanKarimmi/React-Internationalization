import i18next from "i18next";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function App() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");

    const join = () => {
        if (email) {
            toast.success(`${t("membership_completed_successfully")}`);
            setEmail("");
        } else {
            toast.error(`${t("pls_enter_email")}`);
        }
    };

    //* Change language and direction *//
    const changeLng = () => {
        const lng = localStorage.getItem("Github_Club_Lang");
        if (lng === "en") {
            i18next.changeLanguage("fa");
            document.body.dir = "rtl";
        } else {
            i18next.changeLanguage("en");
            document.body.dir = "ltr";
        }
    };

    useEffect(() => {
        const lng = localStorage.getItem("Github_Club_Lang");
        if (lng === "en") {
            document.body.dir = "ltr";
        } else {
            document.body.dir = "rtl";
        }
    }, [document.body.dir]);

    return (
        <div className="min-h-screen flex flex-col text-white ">
            <div className="flex justify-end items-center px-5 py-2">
                <button
                    onClick={() => changeLng()}
                    className=" bg-gray-500 bg-opacity-50 hover:bg-opacity-100 rounded-full px-2 py-1 text-xl font-medium transition-all ease-linear duration-200"
                >
                    {localStorage.getItem("Github_Club_Lang") === "en" ? "EN" : "FA"}
                </button>
            </div>
            <main className="container mx-auto text-center flex-1 p-5">
                <div className="ltrDirection">
                    <Toaster />
                </div>
                <header className="mb-5">
                    <h1 className="font-bold text-5xl uppercase">{t("welcome_to")}</h1>
                    <h3 className="text-3xl uppercase my-5">{t("github_club")}</h3>
                </header>
                <div className="bg-gray-500 inline-block p-3 rounded-3xl bg-opacity-50 font-medium ">
                    1,000,000 {t("members")}
                </div>
                <p className="font-medium text-xl my-3 uppercase">{t("join_our_newsletter")}</p>

                <div className="my-6 ltrDirection">
                    <input
                        type="email"
                        className="text-xl font-medium p-4 w-1/4 bg-gray-300 text-black focus:outline-none rounded-l-3xl"
                        placeholder={`${t("enter_email")}`}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                        onClick={() => join()}
                        className="bg-gray-500 hover:bg-[#2C5BAF] transition-all ease-linear duration-200 p-4 text-xl font-medium rounded-r-3xl"
                    >
                        {" "}
                        {t("join")}
                    </button>
                </div>

                <div className="mt-48 text-base  space-y-3">
                    <p>
                        {t("by_subscribe")}{" "}
                        <a href="#" className="text-blue-500">
                            {t("terms_of_service")}
                        </a>{" "}
                        {t("and")}{" "}
                        <a href="#" className="text-blue-500">
                            {t("privacy_policy")}
                        </a>
                        .
                    </p>
                    <p>{t("support_language")}</p>
                </div>
            </main>
            <footer className="flex justify-between items-center p-5">
                <p className="font-medium">{t("developer_sign")}</p>

                <div className="flex justify-center items-center gap-5 px-5 text-blue-500">
                    <a href="https://github.com/EhsanKarimmi" target="_blank">
                        {" "}
                        {t("about_us")}
                    </a>
                    <a href="#">{t("privacy")}</a>
                    <a href="mailto:ehsan.karimmi@gmail.com">{t("contact")}</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
