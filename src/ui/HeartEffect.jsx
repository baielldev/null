"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeartEffect() {
  const [hearts, setHearts] = useState([]);

  const emojis = [
    "https://img1.picmix.com/output/stamp/normal/8/3/9/3/1803938_93bdb.gif",
    "https://simple-animation.ru/uploads/posts/2024-03/1709833656_106.gif",
    "https://img.freepik.com/free-psd/red-hearts-falling_191095-83207.jpg?semt=ais_hybrid&w=740&q=80",
    "https://cdn.pixabay.com/photo/2018/03/01/07/10/hearts-3189917_1280.png",
    "https://avatanplus.com/files/resources/mid/5847177e539d7158d5b3c586.png",
  ];
  let randomEmoji = Math.floor(Math.random() * emojis.length);

  const addHeart = (e) => {
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`, // разные цвета
      size: 16 + Math.random() * 16, // размер от 16 до 32px
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);
  };

  useEffect(() => {
    document.addEventListener("click", addHeart);
    return () => {
      document.removeEventListener("click", addHeart);
    };
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: heart.x - heart.size / 2 + "px",
            top: heart.y - heart.size / 2 + "px",
            fontSize: heart.size + "px",
            color: heart.color,
          }}
        >
          <img
            src="https://img1.picmix.com/output/stamp/normal/8/3/9/3/1803938_93bdb.gif"
            alt=""
            width={85}
            height={55}
          />
        </span>
      ))}
    </>
  );
}
