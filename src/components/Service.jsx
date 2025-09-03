import { AiOutlineClockCircle } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";

export default function Service() {
  return (
    <section id="service" className="py-20 px-10 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">
          Service Time
        </h2>
        <p className="text-gray-700 text-[20px] text-center mb-12">
          Come as you are and experience the love of Christ in <br /> our welcoming community
        </p>
        <div className="grid grid-cols-1 items-center text-center md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service Item 1 dengan Icon Jam */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <AiOutlineClockCircle className="text-4xl text-black" />
            </div>
            <p className="text-black font-bold">
              IBADAH PERSEKUTUAN TERUNA
            </p>
            <h3 className="text-xl font-semibold mb-4">Setiap Minggu 09.00 WITA</h3>
            <p className="text-gray-700">
              Description of service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Service Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <MdPeopleAlt className="text-4xl text-black" />
            </div>
            <p className="text-black font-bold">
              IBADAH PERSIAPAN
            </p>
            <h3 className="text-xl font-semibold mb-4">Setelah Ibadah Persekutuan Teruna</h3>
            <p className="text-gray-700">
              Description of service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Service Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaPeopleRoof className="text-4xl text-black" />
            </div>
            <p className="text-black font-bold">
              IBADAH PETUGAS & PELAYAN PT
            </p>
            <h3 className="text-xl font-semibold mb-4">Service 3</h3>
            <p className="text-gray-700">
              Description of service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
