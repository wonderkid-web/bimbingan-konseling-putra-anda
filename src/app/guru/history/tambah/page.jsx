"use client";
import { addSiswa } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

export default function Page() {
  const { handleSubmit, register } = useForm();
  const router = useRouter()

  const onSubmit = async (payload) => {
    try {
      await addSiswa(payload);

      toast.success("Berhasil Menambahkan History");
      router.push('/guru/history')

    } catch (e) {
      toast.error("Gagal Menambahkan History");
      toast.error(e.message);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <Toaster />
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Tambah Siswa yang Bermasalah.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Lengkap Siswa
              </label>
              <input
                type="text"
                {...register("nama")}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Nama Lengkap Siswa"
                required
              />
            </div>
            <div className="w-full">
              <label
                for="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Ibu
              </label>
              <input
                type="text"
                {...register("nama_ibu")}
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Nama Lengkap Ibu Siswa"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                for="bapak"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Bapak
              </label>
              <input
                type="text"
                {...register("nama_bapak")}
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Nama Lengkap Bapak Siswa"
                required=""
              />
            </div>
            <div>
              <label
                for="NISN"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NISN
              </label>
              <input
                type="number"
                {...register("nisn")}
                id="nisn"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik NISN Siswa"
                required
              />
            </div>
            <div>
              <label
                for="jenis_pelanggaran"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Jenis Pelanggaran
              </label>
              <input
                type="text"
                {...register("jenis_pelanggaran")}
                id="jenis_pelanggaran"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Jenis Pelanggaran Siswa"
                required=""
              />
            </div>
            <div>
              <label
                for="kelas"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kelas Siswa
              </label>
              <input
                type="text"
                {...register("kelas")}
                id="kelas"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Kelas Siswa"
                required=""
              />
            </div>
            <div>
              <label
                for="jurusan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Jurusan Siswa
              </label>
              <input
                type="text"
                {...register("jurusan")}
                id="jurusan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Jurusan Siswa"
                required=""
              />
            </div>

            <div>
              <label
                for="no_hp_siswa"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ketik Nomor HP Siswa
              </label>
              <input
                type="text"
                {...register("no_hp_siswa")}
                id="no_hp_siswa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Nomor HP Siswa dimulai dari 08.."
                required=""
              />
            </div>

            <div>
              <label
                for="no_hp_ortu"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ketik Nomor HP Orang Tua (Ibu/Bapak)
              </label>
              <input
                type="text"
                {...register("no_hp_ortu")}
                id="no_hp_ortu"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Nomor HP Siswa dimulai dari 08.."
                required=""
              />
            </div>

            <div>
              <label
                for="provinsi"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ketik Provinsi Siswa
              </label>
              <input
                type="text"
                {...register("provinsi")}
                id="provinsi"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Provinsi Siswa"
                required=""
              />
            </div>
            <div>
              <label
                for="kota"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kota Siswa
              </label>
              <input
                type="text"
                {...register("kota")}
                id="kota"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Kota Siswa"
                required=""
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="alamat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ketik Alamat Lengkap Siswa
              </label>
              <textarea
                id="alamat"
                rows="8"
                {...register("alamat")}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Ketik Alamat Lengkap Siswa"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
          >
            Tambah Siswa
          </button>
        </form>
      </div>
    </section>
  );
}
