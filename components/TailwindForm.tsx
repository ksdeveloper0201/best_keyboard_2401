"use client";
import React, { useState } from "react";

function TailwindForm() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <>
                <div className="min-h-screen bg-gray-100">
                    <nav className="bg-white py-2 md:py-4">
                        <div className="container px-4 mx-auto md:flex md:items-center">
                            <div className="flex justify-between items-center">
                                <a
                                    href="index.html"
                                    className="font-bold text-xl text-indigo-600"
                                >
                                    TailWindCssTest
                                </a>
                                <button
                                    id="navbar-toggle"
                                    className="md:hidden border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 "
                                    onClick={toggleCollapsed}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div
                                id="navbar-collapse"
                                className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0  ${
                                    collapsed ? "hidden" : "flex"
                                }`}
                            >
                                <a
                                    href="index.html"
                                    className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                                >
                                    Home
                                </a>
                                <a
                                    href="table.html"
                                    className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                                >
                                    テーブル
                                </a>
                                <a
                                    href="form.html"
                                    className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                                >
                                    フォーム
                                </a>
                                <a
                                    href="item_index.html"
                                    className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                                >
                                    商品一覧
                                </a>
                                <a
                                    href="item_detail.html"
                                    className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                                >
                                    商品詳細
                                </a>
                            </div>
                        </div>
                    </nav>

                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    <section className="text-gray-600 body-font relative">
                                        <div className="container px-5 py-4 mx-auto">
                                            <div className="flex flex-col text-center w-full mb-12">
                                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                                    フォーム
                                                </h1>
                                            </div>
                                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                                <div className="-m-2">
                                                    <div className="p-2 md:w-1/2 mx-auto">
                                                        <div className="relative">
                                                            <label
                                                                htmlFor="name"
                                                                className="leading-7 text-sm text-gray-600"
                                                            >
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="p-2 md:w-1/2 mx-auto">
                                                        <div className="relative">
                                                            <label
                                                                htmlFor="email"
                                                                className="leading-7 text-sm text-gray-600"
                                                            >
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-around p-2 mt-8 w-full">
                                                        <button className="flex mx-auto bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">
                                                            戻る
                                                        </button>
                                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                                            登録する
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default TailwindForm;
