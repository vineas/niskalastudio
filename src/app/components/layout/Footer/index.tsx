import Image from "next/image";
import Link from "next/link";
import Niskala from "../../../../assets/icon/niskala-logo.png";
import Tiktok from "../../../../assets/icon/tiktok.png";
import Instagram from "../../../../assets/icon/instagram.png";

export default function Footer () {
    return (
        <div>
          <footer className="bg-black shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/">
                  <Image
                    src={Niskala}
                    alt="Niskala Studio"
                    className="h-16 w-auto"
                  />
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                    <Link href="/about" className="hover:underline me-4 md:me-6">
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://linktr.ee/niskalastudios?fbclid=PAZXh0bgNhZW0CMTEAAaapdJY6A5w0HzV8HEEMcrktCnLUDkUyIaa0DIv2oMuaQgDlhMp5iYusASg_aem_c0AJibpAkuBGTZ5MVAMVbQ"
                      className="hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sm:flex sm:justify-between sm:items-center">
                <div>
                </div>
                <div className="flex">
                  <Link href="https://www.tiktok.com/@niskalastudios">
                    <Image src={Tiktok} alt="Tiktok" className="p-3 h-16 w-auto" />
                  </Link>
                  <Link href="https://www.instagram.com/niskalastudios.id/">
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      className="p-2 h-16 w-auto"
                    />
                  </Link>
                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Niskala Studio™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
      );
}