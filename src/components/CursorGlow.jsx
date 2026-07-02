import { useEffect } from "react";

function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "fixed w-40 h-40 bg-blue-500 opacity-20 rounded-full pointer-events-none blur-3xl";
    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX - 80 + "px";
      glow.style.top = e.clientY - 80 + "px";
    });
  }, []);

  return null;
}

export default CursorGlow;