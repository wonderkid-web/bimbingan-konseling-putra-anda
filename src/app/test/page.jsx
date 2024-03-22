"use client";

import xlsx from "json-as-xlsx";

function Page() {
  const downloadFile = () => {
    const user = [
      {
        nama: "Iin Bangun",
        video: "https://loremflickr.com/640/480/abstract",
        nisn: "0001",
        alamat: "Kebun Lada",
        nama_ibu: "Siti",
        nama_bapak: "Rahman",
        no_hp_siswa: "0897354672",
        kelas: "rpl-3",
        jurusan: "rekayasa perangkat lunak",
        history: [
          {
            nama_kasus: "Keluar pada saat jam belajar berlangsung",
            waktu_terjadi: "Kamis, 01 Februari 2024",
            status: "Selesai",
            waktu_diselesaikan: "Monday, 2024-02-19 00:26:54",
          },
          {
            nama_kasus: "Terlambat masuk kelas",
            waktu_terjadi: "Senin, 05 Februari 2024",
            status: "Proses",
            waktu_diselesaikan: "Thursday, 2024-03-21 12:44:32",
          },
          {
            nama_kasus: "Absen 13 hari",
            waktu_terjadi: "Rabu, 07 Februari 2024",
            status: "Bermasalah",
          },
        ],
        umur: "6",
        kota: "Binjai",
        provinsi: "Sumatera Utara",
        no_hp_ortu: "0812637467",
        tanggal_lahir: "1985-01-07T22:02:55.506Z",
        id: "1",
        jenis_pelanggaran: "Keluar pada saat jam pelajaran berlangsung",
      },
      {
        nama: "Firmansyah",
        video: "https://loremflickr.com/640/480/abstract",
        nisn: "0002",
        alamat: "kebun lada",
        nama_ibu: "gina",
        nama_bapak: "bagus",
        no_hp_siswa: "087823645278",
        kelas: "rpl-3",
        jurusan: "rekayasa perangkat lunak",
        history: [],
        umur: "n",
        kota: "Binjai",
        provinsi: "Sumatera Utara",
        no_hp_ortu: "081325647836",
        tanggal_lahir: "2005-02-04T14:09:01.560Z",
        id: "2",
        jenis_pelanggaran: "merokok di lingkunga sekolah",
      },
      {
        nama: "Alzena",
        video: "https://loremflickr.com/640/480/abstract",
        nisn: "0003",
        alamat: "Tanah Merah",
        nama_ibu: "isma",
        nama_bapak: "nurdin",
        no_hp_siswa: "081365738492",
        kelas: "ak-1",
        jurusan: "akutansi",
        history: [],
        umur: "u",
        kota: "Binjai",
        provinsi: "Sumatera Utara",
        no_hp_ortu: "081254738291",
        tanggal_lahir: "1954-06-03T05:58:28.007Z",
        id: "3",
        jenis_pelanggaran: "pakaian yang tidak sopan",
      },
      {
        nama: "Naem",
        video: "https://loremflickr.com/640/480/abstract",
        nisn: "0004",
        alamat: "Tanah Lapang",
        nama_ibu: "Rosma",
        nama_bapak: "Budi",
        no_hp_siswa: "083894756241",
        kelas: "Kjk-02",
        jurusan: "Komputer",
        history: [
          {
            nama_kasus: "Terlambat masuk sekolah",
            waktu_terjadi: "rabu 13 maret 2024",
            status: "Selesai",
            waktu_diselesaikan: "Thursday, 2024-03-14 00:06:21",
          },
        ],
        umur: "e",
        kota: "Binjai",
        provinsi: "Sumatera Utara",
        no_hp_ortu: "081372640999",
        tanggal_lahir: "1984-03-21T14:52:37.452Z",
        id: "4",
        jenis_pelanggaran: "Berkelahi",
      },
    ];

    let data = [
      {
        sheet: "User Information",
        columns: [
          { label: "Nama", value: "nama" },
          { label: "Jenis Pelanggaran", value: "" },
          { label: "NISN", value: "nisn" },
          { label: "Alamat", value: "alamat" },
          { label: "Nama Ibu", value: "nama_ibu" },
          { label: "Nama Bapak", value: "nama_bapak" },
          { label: "No HP Siswa", value: "no_hp_siswa" },
          { label: "Kelas", value: "kelas" },
          { label: "Jurusan", value: "jurusan" },
          { label: "Umur", value: "umur" },
          { label: "Kota", value: "kota" },
          { label: "Provinsi", value: "provinsi" },
          { label: "No HP Ortu", value: "no_hp_ortu" },
          { label: "Tanggal Lahir", value: "tanggal_lahir" },
          { label: "ID", value: "id" },
        ],
        content: user,
      },
      // {
      //   sheet: "Detail User",
      //   columns: [
      //     { label: "Nama", value: "nama" },
      //     {
      //       label: "Nama Kasus",
      //       value: (row) => row.history.map((h) => h.nama_kasus).join(", "),
      //     },
      //     {
      //       label: "Waktu Terjadi",
      //       value: (row) => row.history.map((h) => h.waktu_terjadi).join(", "),
      //     },
      //     {
      //       label: "Status",
      //       value: (row) => row.history.map((h) => h.status).join(", "),
      //     },
      //     {
      //       label: "Waktu Diselesaikan",
      //       value: (row) =>
      //         row.history.map((h) => h.waktu_diselesaikan || "").join(", "),
      //     },
      //   ],
      //   content: user.map((u) => ({
      //     nama: u.nama,
      //     history: u.history,
      //   })),
      // }
    ];

    let settings = {
      fileName: "MySpreadsheet",
    };
    xlsx(data, settings);
  };

  return (
    <div id="app">
      <h1>Testing json-as-xlsx</h1>
      <button onClick={downloadFile}>Download</button>
      <h2>
        <span>Visit this project on: </span>
        <a
          href="https://github.com/LuisEnMarroquin/json-as-xlsx"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </h2>
    </div>
  );
}

export default Page;
