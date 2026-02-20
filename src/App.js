// frontend/src/App.js
import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CreaturePicker from "./components/CreaturePicker";
import NameInput from "./components/NameInput";
import LoadingScreen from "./components/LoadingScreen";
import StoryViewer from "./components/StoryViewer";
import { useStoryGenerator } from "./hooks/useStoryGenerator";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [creature, setCreature] = useState(null);
  const [customCreature, setCustomCreature] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [creatureName, setCreatureName] = useState("");
  const { slides, loading, error, generate } = useStoryGenerator();

  const creatureLabel = creature?.name || customCreature;

  const handleGenerate = async (name) => {
    setCreatureName(name);
    setScreen("loading");
    const success = await generate(creatureLabel, name);
    setScreen(success ? "story" : "name");
  };

  const restart = () => {
    setScreen("welcome");
    setCreature(null);
    setCustomCreature("");
    setUseCustom(false);
    setCreatureName("");
  };

  switch (screen) {
    case "welcome":
      return <WelcomeScreen onStart={() => setScreen("pick")} />;
    case "pick":
      return (
        <CreaturePicker
          creature={creature}
          setCreature={setCreature}
          customCreature={customCreature}
          setCustomCreature={setCustomCreature}
          useCustom={useCustom}
          setUseCustom={setUseCustom}
          onNext={() => setScreen("name")}
        />
      );
    case "name":
      return (
        <NameInput
          creature={creature}
          customCreature={customCreature}
          error={error}
          onBack={() => setScreen("pick")}
          onGenerate={handleGenerate}
        />
      );
    case "loading":
      return <LoadingScreen />;
    case "story":
      return <StoryViewer slides={slides} onRestart={restart} />;
    default:
      return null;
  }
}