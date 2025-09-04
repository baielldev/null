"use client";
import { useState } from "react";
import LastChat from "../../ui/lastChat/LastChat";

export default function FooterChat() {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div>
      <div className="mainbek">
        <button className="btn" onClick={() => setChatVisible(true)}>
          Ответить 💌
        </button>
      </div>
      <LastChat visible={chatVisible} onClose={() => setChatVisible(false)} />
    </div>
  );
}
