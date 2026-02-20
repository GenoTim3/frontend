// frontend/src/components/StoryViewer.js
import React, { useState } from "react";

const SLIDE_COLORS = [
  "from-purple-400 to-indigo-500",
  "from-pink-400 to-rose-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-sky-400 to-blue-500",
];

const SLIDE_EMOJIS = ["🌅", "🌿", "⭐", "🌈", "🎉"];

export default function StoryViewer({ slides, onRestart }) {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const goSlide = (dir) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((p) => p + dir);
      setFadeIn(true);
    }, 200);
  };

  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${SLIDE_COLORS[current]} flex flex-col items-center justify-center p-4 transition-all duration-500`}
    >
      <div className="max-w-xl w-full">
        {/* Page dots */}
        <div className="flex justify-center gap-2 mb-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-white scale-125 shadow"
                  : "bg-white bg-opacity-40"
              }`}
            />
          ))}
        </div>

        {/* Story card */}
        <div
          className={`bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 mb-6 transition-all duration-300 ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center mb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">
            Page {current + 1} of {slides.length}
          </div>
          <div className="text-5xl text-center mb-4">
            {SLIDE_EMOJIS[current]}
          </div>
          <p
            className="text-xl leading-relaxed text-gray-800 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {slides[current]}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => goSlide(-1)}
            disabled={isFirst}
            className="bg-white bg-opacity-80 hover:bg-opacity-100 disabled:opacity-30 disabled:cursor-not-allowed text-gray-700 font-bold py-3 px-6 rounded-full shadow transition-all text-lg"
          >
            ← Back
          </button>

          {isLast ? (
            <button
              onClick={onRestart}
              className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow hover:shadow-lg transition-all text-lg"
            >
              🔄 New Story!
            </button>
          ) : (
            <button
              onClick={() => goSlide(1)}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 font-bold py-3 px-6 rounded-full shadow transition-all text-lg"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}