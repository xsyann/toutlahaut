"use client";
import { slugify } from "@/utils/slug";
import { animated, useSpring, useTrail } from "@react-spring/web";
import Link from "next/link";
import { useEffect, useState } from "react";
import { series } from "./series";

const Home = (): JSX.Element => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(true);
  }, []);

  const trails = useTrail(series.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: trigger ? 1 : 0,
    y: trigger ? 0 : 50,
  });

  const transition = useSpring({
    config: { mass: 5, tension: 120, friction: 120 },
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
  });

  return (
    <main className="bg-landing min-h-screen bg-cover flex items-center font-sans font-thin flex-col md:flex-row md:justify-center gap-24">
      <animated.div style={transition}>
        <h1 className="text-4xl mt-24 md:mt-0">
          <strong className="font-black">Tout là-haut</strong>.net
        </h1>
      </animated.div>
      <nav className="xl:absolute right-[5%] top-[35%]">
        <ul className="text-xl">
          {trails.map((props, index) => (
            <animated.div key={index} style={props}>
              <li className="p-0.5 opacity-70 hover:opacity-100">
                <Link
                  href={slugify(series[index].name)}
                  className="hover:underline hover:decoration-1"
                >{`> ${series[index].name}`}</Link>
              </li>
            </animated.div>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Home;
