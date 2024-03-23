import { options } from "@/app/api/auth/[...nextauth]/options";
import { TambahHistory } from "@/components/layout/TambahHistory";
import UpdateStatus from "@/components/layout/UpdateStatus";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import uuid from "react-uuid";
import { Toaster } from "sonner";

const getSiswaById = async (id) => {
  const raw = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/history/${id}`
  );

  return raw.json();
};

export default async function page({ params: { id } }) {
  const session = await getServerSession(options);

  const user = session?.user ? true : false

  const siswa = await getSiswaById(id);

  return (
    <div className="p-12">
      <Toaster />
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex justify-center text-center order-last md:order-first mt-20 md:mt-0">
            <Link
              href={`https://wa.me/${siswa.no_hp_siswa}`}
              className="flex items-center text-white py-2 px-3 uppercase rounded bg-green-600 hover:bg-green-700 gap-2 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Hubungi Siswa Pribadi <FaWhatsapp />
            </Link>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <Link
              href={`https://wa.me/${siswa.no_hp_ortu}`}
              className="flex items-center text-white py-2 px-3 uppercase rounded bg-green-600 hover:bg-green-700 gap-2 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Hubungi Orang Tua Siswa <FaWhatsapp />
            </Link>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {siswa.nama}
            <span className="font-light text-gray-500">{siswa.umur}</span>
          </h1>
          <p className="font-light text-gray-600 mt-3">
            {siswa.kota}, {siswa.provinsi}
          </p>
          <p className="mt-8 text-gray-500">
            {siswa.jurusan} - {siswa.kelas}
          </p>
          <p className="mt-2 text-gray-500">{siswa.alamat}</p>
          <div className="overflow-x-auto w-[350px] mx-auto bg-white dark:bg-neutral-700">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="uppercase text-gray-500 tracking-wider border-b-2 dark:border-neutral-600">
                <tr>
                  <th scope="col" className="text-center px-6 py-2">
                    Nama Ibu
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Nama Bapak
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-600">
                  <th scope="row" className="font-light px-6 py-2">
                    {siswa.nama_ibu}
                  </th>
                  <td className="px-6 py-2 font-light text-center">
                    {siswa.nama_bapak}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE HISTORY */}
        <div className="mt-4 flex flex-col justify-center">
          {user && <TambahHistory siswa={siswa} />}
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Kasus
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waktu Terjadi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waktu Terselesaikan
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Status
                  </th>
                  {user && <th scope="col" className="px-6 py-3"></th>}
                </tr>
              </thead>
              <tbody>
                {!siswa.length ? (
                  siswa.history.map((hist, i) => (
                    <tr key={uuid()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {hist.nama_kasus}
                      </th>
                      <td className="px-6 py-4">{hist.waktu_terjadi}</td>
                      <td className="px-6 py-4">
                        {hist.waktu_diselesaikan
                          ? hist.waktu_diselesaikan
                          : "-"}
                      </td>
                      <td className={`px-4 py-4 text-center`}>
                        <span
                          className={`p-2 font-semibold rounded text-white  
                          ${hist.status == "Bermasalah" && "bg-red-500"}
                          ${hist.status == "Proses" && "bg-yellow-500"}
                          ${hist.status == "Selesai" && "bg-green-500"}
                          
                          `}
                        >
                          {hist.status}
                        </span>
                      </td>
                      {user && (
                        <td className={`px-4 py-4`}>
                          <UpdateStatus siswa={siswa} index={i} />
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      colSpan={5}
                      className="text-md text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Siswa Belum ada Kasus Apapun.
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
