// frontend/src/hooks/useStoryGenerator.js
import { useState } from "react";

const API_URL = "http://localhost:3001/api/story";

export function useStoryGenerator() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async (creature, creatureName) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ creature, creatureName }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSlides(data.slides);
      return true;
    } catch (e) {
      setError(e.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { slides, loading, error, generate };
}