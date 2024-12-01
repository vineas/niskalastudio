import Project from "../../data/data.json";
// import { motion } from "motion/react";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      id="project"
      className="py-20 bg-white w-11/12 md:container mx-auto px-14"
    >
      <div className="mb-12">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-3">
          Projects
        </h3>
        <p className="text-gray-500 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          veritatis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-11/12 md:container mx-auto gap-8">
        {Project.slice()
          .reverse()
          .map((item, index) => (
            <div
              className="shadow-2xl rounded-xl"
              key={index}
              //   whileHover={{ scale: 1.1 }}
              //   whileTap={{ scale: 0.9 }}
              //   transition={{ type: "spring", stiffness: 300, damping: 17 }}
            >
              <Link href={item.link}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-lg w-full"
                />
                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">{item.title}</h4>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
