import React, { useState, useEffect } from "react";
import reactLogo from "./../assets/pwa-icon.webp";

const Home = () => {
  const [count, setCount] = useState(0);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Optionally, show a custom install prompt UI
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    console.log("Hii");
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button>count is {count}</button>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <h2>A Simple PWA App </h2>
      {deferredPrompt && (
        <button onClick={handleInstallClick}>Install App</button>
      )}
    </div>
  );
};

export default Home;
