import ServiceData from "../../data/service.json";

export default function Service() {
  return (
    <div id="services" className="bg-gray-200 py-20">
      <div className="w-11/12 md:container mx-auto px-14">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Our Services
        </h3>
        <p className="text-gray-500 text-center mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          inventore illum autem ex!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card */}
          {ServiceData.map((item, index) => (
            <div className="flex py-8 px-3 bg-white rounded-xl" key={index}>
              <div className="">
                <h5 className="text-2xl font-bold mb-5 text-center">
                  {item.title}
                </h5>
                <p className="text-gray-500 mb-5 text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
