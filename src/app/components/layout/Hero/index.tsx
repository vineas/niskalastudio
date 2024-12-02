"use client";
import Navbar from "../Navbar";
import styles from "./background.module.css";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <>
      <div
        className={styles.background}
      >
        <Navbar />
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <motion.div
          initial={{  opacity: 0 }}
          whileInView={{  opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <motion.h1
              className="text-center text-white text-3xl md:text-5xl font-bold"
              initial={{  opacity: 0 }}
              whileInView={{  opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Abadikan Momenmu
            </motion.h1>
          </motion.div>
          <motion.div
            className="text-center mt-3 px-20 mb-5"
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              className="text-white text-md md:text-2xl"
              initial={{  opacity: 0 }}
              whileInView={{  opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Rasakan pengalaman istimewa dan ciptakan kenangan tak terlupakan
              buat setiap detik jadi berarti
            </motion.p>
          </motion.div>
          <motion.div 
          className="text-center mt-5 px-20"
          initial={{  opacity: 0 }}
          whileInView={{  opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <FreeConsultButton />
          </motion.div>
        </div>
      </div>
    </>
  );
}

function FreeConsultButton() {
  return (
    <button
      className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-9 md:px-16 border-b-4 border-black hover:border-black rounded-full"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "https://www.instagram.com/niskalastudios.id/";
      }}
    >
      Free Consult
    </button>
  );
}
