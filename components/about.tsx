/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef } from "react";
import { HeroParallax } from "./ui/hero-parallax";
const highlights = [
  {
    title: "Asian Games 2022 Representation",
    link: "/achievements/asian-games-2022",
    thumbnail:
      "https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658637/IMG_20231008_202252_ljgruy.jpg",
  },
  {
    title: "ADCC World Champion",
    link: "/achievements/adcc-champion",
    thumbnail:
      "https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658608/FB_IMG_1721654648900_sx6bkc.jpg",
  },
  {
    title: "8-Time National Gold Medalist",
    link: "/achievements/national-gold",
    thumbnail:
      "https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658608/FB_IMG_1721654648900_sx6bkc.jpg",
  },
  {
    title: "Training with the Best",
    link: "/training/top-coaches",
    thumbnail:
      "https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658606/IMG-20231204-WA0108_hn17lu.jpg",
  },
  {
    title: "Media Features",
    link: "/media",
    thumbnail:
      "https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658606/IMG-20231204-WA0108_hn17lu.jpg",
  },
  {
    title: "Future Aspirations",
    link: "/about/future",
    thumbnail:
      "https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658616/_TBH6478_rhgnka.jpg",
  },
];

const WrestlerPortfolioSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="text-black bg-black">
      <HeroParallax highlights={highlights} />;
    </div>
  );
};

export default WrestlerPortfolioSection;
