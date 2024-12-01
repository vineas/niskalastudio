import Image from "next/image";
import team from "../../../../assets/img/niskala-team.jpg";

export default function About() {
  return (
    <>
      <div id="about" className="md:px-6 lg:px-8 py-20">
        <div className="w-11/12 md:container mx-auto px-14">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="content-center"> 
              <h3 className="text-3xl md:text-5xl font-bold mb-5 md:text-justify">
                About Us
              </h3>
              <p className="mb-5 md:text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                iure sint totam temporibus quos cupiditate dolorum voluptates,
                accusantium odio ipsum eos. Vitae quia assumenda nesciunt odio
                libero esse quasi eveniet.
              </p>
              <p className="mb-5 pb-5 md:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                vel mollitia culpa repudiandae nostrum illum. Praesentium
                possimus exercitationem rem, qui incidunt laudantium obcaecati
                veritatis facilis.
              </p>
            </div>
            <div className="mx-auto md:w-1/3">
              <Image
                src={team}
                className=" rounded-lg mb-10"
                alt="niskala-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
