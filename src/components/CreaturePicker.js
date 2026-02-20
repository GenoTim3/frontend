// frontend/src/components/CreaturePicker.js
import React from "react";

const CREATURES = [
  { name: "Dragon", emoji: "🐉" },
  { name: "Griffin", emoji: "🦅" },
  { name: "Pegasus", emoji: "🐴" },
  { name: "Phoenix", emoji: "🔥" },
  { name: "Unicorn", emoji: "🦄" },
];

export default function CreaturePicker({
  creature,
  setCreature,
  customCreature,
  setCustomCreature,
  useCustom,
  setUseCustom,
  onNext,
}) {
  const canProceed = creature || (useCustom && customCreature.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-200 flex items-center justify-center p-4">
      <div className="text-center max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-amber-800 mb-6">
          🌟 Choose Your Creature! 🌟
        </h2>

        <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm mx-auto">
          {CREATURES.map((c) => (
            <button
              key={c.name}
              onClick={() => { setCreature(c); setUseCustom(false); }}
              className={`p-3 rounded-2xl text-center transition-all transform hover:scale-105 shadow ${
                creature?.name === c.name && !useCustom
                  ? "bg-amber-500 text-white ring-4 ring-amber-300 scale-105"
                  : "bg-white text-amber-800 hover:bg-amber-100"
              }`}
            >
              <div className="text-4xl mb-1">{c.emoji}</div>
              <div className="text-sm font-bold">{c.name}</div>
            </button>
          ))}
          <button
            onClick={() => { setUseCustom(true); setCreature(null); }}
            className={`p-3 rounded-2xl text-center transition-all transform hover:scale-105 shadow ${
              useCustom
                ? "bg-amber-500 text-white ring-4 ring-amber-300 scale-105"
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            <div className="text-4xl mb-1">✏️</div>
            <div className="text-sm font-bold">Custom!</div>
          </button>
        </div>

        {useCustom && (
          <input
            type="text"
            value={customCreature}
            onChange={(e) => setCustomCreature(e.target.value)}
            placeholder="Type your creature (e.g. Sea Serpent)"
            className="w-full max-w-xs mx-auto block mb-4 p-3 rounded-xl border-2 border-amber-300 text-center text-lg focus:outline-none focus:border-amber-500"
            maxLength={30}
          />
        )}

        <button
          onClick={onNext}
          disabled={!canProceed}
          className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}