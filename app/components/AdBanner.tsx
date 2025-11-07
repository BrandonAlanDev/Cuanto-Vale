import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdBannerProps {
  slot: string;
  style?: React.CSSProperties;
}

export default function AdBanner({ slot, style }: AdBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        // Limpia y vuelve a empujar el anuncio
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Error al cargar AdSense:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle justify-center items-center m-auto"
      style={style || { display: "block", width: "100%", height: "120px"}}
      data-ad-client="ca-pub-6812536998270195"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
}
