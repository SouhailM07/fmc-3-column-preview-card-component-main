import "./mycontainer.css";
// components
import { Toaster } from "@/components/ui/toaster";

import { MyCard } from "../../components";
// assets
import img1 from "/icon-sedans.svg";
import img2 from "/icon-suvs.svg";
import img3 from "/icon-luxury.svg";

export default function MyContainer() {
  interface Cars {
    img: string;
    color: string;
    title: string;
    txt: string;
  }
  const cars: Cars[] = [
    {
      img: img1,
      color: "color1",
      title: "SEDANS",
      txt: " Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      img: img2,
      color: "color2",
      title: "SUVs",
      txt: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      img: img3,
      color: "color3",
      title: "Luxury",
      txt: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];
  return (
    <>
      <main className="flex justify-center items-center min-h-screen">
        <Toaster />
        <article className="grid grid-cols-3 max-md:grid-cols-1 ">
          {cars.map((e, i) => {
            return (
              <MyCard
                key={i}
                img={e.img}
                title={e.title}
                txt={e.txt}
                color={e.color}
              />
            );
          })}
        </article>
      </main>
    </>
  );
}
