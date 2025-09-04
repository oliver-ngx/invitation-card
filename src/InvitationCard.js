import React, { useState, useEffect } from "react";

export default function InvitationCard() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);
  const [fireflies, setFireflies] = useState(
    Array.from({ length: 70 }, () => ({
      x: Math.random() * 500,
      y: Math.random() * 300,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFireflies((prev) =>
        prev.map((f) => ({
          ...f,
          x: (f.x + f.dx + 500) % 500,
          y: (f.y + f.dy + 300) % 300,
        }))
      );
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center font-mono">
      {page === 1 && (
        <div className="text-center">
          <pre className="text-green-400 text-left text-lg">
{`if (morning == 'Y') {
   cout << "Bonjour | Buen día | صبح بخیر | Good Morning\n";
} break;`}
          </pre>
          <p className="text-pink-400 mt-6 text-lg">Subah Bakhair, Sub</p>
          <button
            onClick={() => setPage(2)}
            className="mt-10 px-4 py-2 bg-pink-500 rounded-full text-black hover:bg-pink-600"
          >
            ➡
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="text-left max-w-2xl p-4">
          <p className="text-lg font-bold">You are cordially invited to</p>
          <p className="text-lg mb-6">an evening dinner,</p>

          <p>Saturday, 6th September</p>
          <p>Time: 7:30 PM – 9:00 PM</p>
          <p>Restaurant: Blue Reef Fish & Chips</p>
          <p>
            Address: 3A-G-20 Ground Floor, Straits Quay, Jalan Seri Tg Pinang, Seri
            Tanjung Pinang, 10470 Tanjung Tokong, Pulau Pinang
          </p>

          <div className="mt-6">
            <p className="font-bold">Blue Reef Fish & Chips (Non Halal)</p>
            <p>serve pork (NO) | serve alcohol (YES)</p>
            <p className="mt-2">
              However, they do serve alcohol indirectly through beer-battered dishes
              and have a permissive alcohol policy via BYO wine service.
            </p>
          </div>

          <p className="mt-6 font-semibold">
            This place serves no pork, though alcohol is on the premises—would that be
            alright with you, or shall I look for another option?
          </p>

          <p className="mt-4">If alright, shall I expect the pleasure of your company?</p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => { setResponse(true); setPage(3); }}
              className="px-4 py-2 bg-pink-500 rounded-full text-black hover:bg-pink-600"
            >
              Yes
            </button>
            <button
              onClick={() => { setResponse(false); setPage(3); }}
              className="px-4 py-2 bg-pink-500 rounded-full text-black hover:bg-pink-600"
            >
              No
            </button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div className="relative w-[500px] h-[300px] flex items-start justify-start pl-10 pt-10">
          {fireflies.map((f, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-90 animate-pulse"
              style={{
                left: f.x,
                top: f.y,
                background: `radial-gradient(circle, rgba(255,182,193,1) 0%, rgba(255,69,69,1) 100%)`,
              }}
            ></div>
          ))}
          {response ? (
            <p className="text-[#ff5b8c] text-left text-lg z-10 drop-shadow-lg">
              Thank you,<br />
              your presence will be the finest part of the evening
            </p>
          ) : (
            <p className="text-[#ff5b8c] text-left text-lg z-10 drop-shadow-lg">
              I’m sorry and thank you for your patience,<br />
              Refining....
            </p>
          )}
        </div>
      )}
    </div>
  );
}
