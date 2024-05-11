import Image from "next/image";
import bg from "/public/school.jpg";

export default function page() {
  return (
    <div className="relative h-[90vh] flex justify-center items-center">
      <Image style={{ objectFit: "contain" }} src={bg} fill alt="logo bg" />
      {/* <div className="w-1/2 p-4 rounded-sm flex flex-col gap-5 backdrop-blur-sm text-white bg-white/10 ...">
        <h1 className="text-2xl text-center">
          Selamat datang di website bimbingan konseling online SMK Putra Anda
          Binjai!
        </h1>
        <p>
          SMK Putra Anda Binjai berkomitmen untuk memberikan layanan bimbingan
          konseling yang berkualitas kepada seluruh siswanya. Bimbingan
          konseling merupakan salah satu layanan pendidikan yang bertujuan untuk
          membantu siswa mengembangkan potensinya secara optimal.
        </p>
        <Button className="bg-red-700 font-bold text-white">Kunjungi Website Profile Putra Anda</Button>
      </div> */}
    </div>
  );
}
