import Navbar from "../Navbar";
import styles from "./background.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.background}>
        <Navbar />
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <div>
            <h1 className="text-center text-white text-3xl md:text-5xl font-bold">
              Abadikan Momenmu
            </h1>
          </div>
          <div className="text-center mt-3 px-20 mb-5">
            <p className="text-white text-sm md:text-2xl">
              Abadikan momen berharga bersama Niskala Studio, rasakan pengalaman
              istimewa, dan ciptakan kenangan tak terlupakan buat setiap detik
              jadi berarti
            </p>
          </div>
          <div className="text-center mt-5 px-20">
            {/* <FreeConsultButton /> */}
          </div>
        </div>
      </div>
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
