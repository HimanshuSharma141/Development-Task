import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r flex flex-col items-center py-4 gap-4">
        {/* Sidebar icons (placeholders) */}
        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-2xl font-bold">
          P
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          💬
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          ⭐
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          ⚙️
        </div>
      </aside>
      {/* Chat List */}
      <section className="w-96 bg-white border-r flex flex-col">
        {/* Top bar */}
        <div className="flex items-center px-4 py-2 border-b gap-2">
          <span className="font-semibold text-lg">chats</span>
          <button className="ml-auto px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
            Custom filter
          </button>
          <button className="px-2 py-1 text-xs bg-gray-100 rounded">Save</button>
          <input
            className="ml-2 px-2 py-1 border rounded text-sm w-24"
            placeholder="Search"
          />
          <button className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
            Filtered
          </button>
        </div>
        {/* Chat items */}
        <div className="flex-1 overflow-y-auto">
          {/* Example chat item */}
          <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer border-b">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-lg font-bold mr-3">
              P
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Periskope Team Chat</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 rounded px-1 ml-1">
                  Demo
                </span>
                <span className="text-xs bg-green-100 text-green-700 rounded px-1">
                  internal
                </span>
              </div>
              <div className="text-xs text-gray-500 truncate">
                Periskope: Test message
              </div>
            </div>
            <div className="text-xs text-gray-400 ml-2">25-Feb-25</div>
          </div>
          {/* Add more chat items as needed */}
        </div>
      </section>
      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center px-6 py-3 border-b bg-white">
          <div className="font-semibold text-lg">Test El Centro</div>
          <div className="ml-4 text-xs text-gray-500">
            Roshnaq Airtel, Roshnaq Jio, Bharat Kumar Ramesh, Periskope
          </div>
          <div className="ml-auto flex gap-2">
            <button className="px-2 py-1 text-xs border rounded">Refresh</button>
            <button className="px-2 py-1 text-xs border rounded">Help</button>
            <button className="px-2 py-1 text-xs border rounded">5 / 6 phones</button>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-10 py-6 bg-[url('/whatsapp-bg.png')] bg-repeat">
          {/* Date separator */}
          <div className="flex justify-center my-4">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
              22-01-2025
            </span>
          </div>
          {/* Message left */}
          <div className="flex items-start gap-2 mb-2">
            <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-xs font-bold">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-green-700 text-sm">
                  Roshnaq Airtel
                </span>
                <span className="text-xs text-gray-400">+91 63846 47925</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 mt-1 shadow text-sm">
                Hello, South Euna!
              </div>
              <div className="text-xs text-gray-400 mt-1">08:01</div>
            </div>
          </div>
          {/* Message right */}
          <div className="flex justify-end mb-2">
            <div>
              <div className="flex justify-end">
                <span className="font-semibold text-green-700 text-sm">
                  Periskope
                </span>
                <span className="text-xs text-gray-400 ml-2">+91 99718 44008</span>
              </div>
              <div className="bg-green-100 rounded-lg px-4 py-2 mt-1 shadow text-sm">
                hello
              </div>
              <div className="text-xs text-gray-400 mt-1 text-right">12:07</div>
            </div>
          </div>
        </div>
        {/* Input bar */}
        <form className="flex items-center px-6 py-4 border-t bg-white gap-2">
          <input
            className="flex-1 border rounded px-4 py-2 text-sm"
            placeholder="Message..."
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
