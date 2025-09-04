"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Banner from "../components/hero1/Banner";
import Four from "../components/hero2/Four";
import Hero from "../components/hero3/Hero";
import HeroAfter from "../components/hero4/HeroAfter";
import HeroBefore from "../components/hero5/HeroBefore";
import Slider from "../components/slider/Slider";
import HeroVideo from "../components/heroVideo/HeroVideo";
import ChatLetter from "../components/ChatLetter/ChatLetter";
import HeroModalVideo from "../components/heroModalVideo/HeroModalVideo";
import FooterChat from "../components/footerChat/FooterChat";
import Memory from "../components/memory/Memory";
export default function Home() {
  const [showMemory, setShowMemory] = useState(true);
  const audioRef = useRef(null);
  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // снимаем mute
        audioRef.current
          .play()
          .catch((e) => console.log("Ошибка воспроизведения:", e));
      }
    };
    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("scroll", enableSound, { once: true });
    document.addEventListener("keydown", enableSound, { once: true });

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
  }, []);
  return (
    <div className={styles.page}>
      <audio ref={audioRef} autoPlay loop muted>
        <source src="/assets/nurick-music.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>
      {showMemory && (
        <Memory onClose={() => setShowMemory(false)} /> // ✅ передаем функцию
      )}
      <Banner />
      <ChatLetter />
      <HeroVideo />
      <Slider />
      <Four />
      <HeroAfter />
      <HeroModalVideo />
      <Hero />
      <FooterChat />
      <HeroBefore />
    </div>
  );
}
