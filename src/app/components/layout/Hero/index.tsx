"use client";
import Navbar from "../Navbar";
import styles from "./background.module.css";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <>
      <motion.div
        className={styles.background}
        initial={{  opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Navbar />
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <motion.div
            animate={{ opacity: [0, 1], y: [-50, 0] }}
            transition={{ duration: 0.8, delay: 0.5 }}
            initial={{ x: -50, opacity: 0}}
            whileInView={{ x: 0, opacity: 1}}
            // transition={{ duration: 3 }}
          >
            <motion.h1
              className="text-center text-white text-3xl md:text-5xl font-bold"
              animate={{ scale: [0.8, 1] }}
              transition={{ duration: 1 }}
              initial={{ x: -50, opacity: 0}}
              whileInView={{ x: 0, opacity: 1}}
              // transition={{ duration: 3 }}
            >
              Abadikan Momenmu
            </motion.h1>
          </motion.div>
          <motion.div
            className="text-center mt-3 px-20 mb-5"
            animate={{ scale: [0.8, 1] }}
            transition={{ duration: 1 }}
            initial={{ x: -50, opacity: 0}}
            whileInView={{ x: 0, opacity: 1}}
          >
            <motion.p
              className="text-white text-md md:text-2xl"
              animate={{ scale: [0.8, 1] }}
              transition={{ duration: 1 }}
            >
              Rasakan pengalaman istimewa dan ciptakan kenangan tak terlupakan
              buat setiap detik jadi berarti
            </motion.p>
          </motion.div>
          {/* <div className="text-center mt-5 px-20">
            <FreeConsultButton />
          </div> */}
        </div>
      </motion.div>
    </>
  );
}

// function FreeConsultButton() {
//   return (
//     <button
//       className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-9 md:px-16 border-b-4 border-black hover:border-black rounded-full"
//       onClick={(e) => {
//         e.preventDefault();
//         window.location.href = "https://www.instagram.com/niskalastudios.id/";
//       }}
//     >
//       Free Consult
//     </button>
//   );
// }
