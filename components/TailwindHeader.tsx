"use client";
import React, { useState } from "react";

function TailwindHeader() {

    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }


    return (
        <div>
            <>
                <div className="min-h-screen bg-gray-100">
                    <nav className="bg-white py-2 md:py-4">
                        <div className="container px-4 mx-auto md:flex md:items-center">
                            <div className="flex justify-between items-center">
                                <button id="navbar-toggle" className="md:hidden border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75" onClick={toggleCollapsed}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                                <a href="index.html" className="font-bold text-xl text-indigo-600">TailWindCssTest</a>
                            </div>
                            <div id="navbar-collapse" className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0  ${collapsed ? 'hidden' : 'flex'}`}>
                                <a href="index.html" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
                                <a href="table.html" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">テーブル</a>
                                <a href="form.html" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">フォーム</a>
                                <a href="item_index.html" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">商品一覧</a>
                                <a href="item_detail.html" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">商品詳細</a>
                            </div>

                        </div>
                    </nav>

                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    内容
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div >
    );
}

export default TailwindHeader;