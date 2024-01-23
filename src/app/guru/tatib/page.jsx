"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import uuid from "react-uuid";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit } from "@/components/Table/Edit";
import { Toaster, toast } from "sonner";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { deleteOnServer } from "@/utils/actions";
import { Tambah } from "@/components/Table/Tambah";

export default function Page() {
  const [newVisi, setNewVisi] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/rules`)
      .then((raw) => raw.json())
      .then((res) => setNewVisi(res));
  }, []);

  const deleteContent = async (head, content) => {
    const filtered = (visiMisiSekolah[
      visiMisiSekolah.findIndex((v) => v.heading == head)
    ] = {
      heading: head,
      content: visiMisiSekolah
        .find((v) => v.heading == head)
        .content.filter((c) => c != content),
    });
    // setNewVisi(filtered)
    console.log(visiMisiSekolah);
  };

  const deleteRule = async (d) => {
    try {
      toast.loading("Proses menghapus...");
      await deleteOnServer(d);

      toast.success(`Peraturan dengan ID: ${d} berhasil di hapus`);
      fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/rules`)
        .then((raw) => raw.json())
        .then((res) => setNewVisi(res));
    } catch (error) {
      toast.error(`Peraturan dengan ID: ${d} gagal di hapus`);
      toast.error(error.message);
    }
  };

  const [parentAnimate] = useAutoAnimate();

  return (
    <div className="bg-gray-100">
      <Toaster />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhVcpkkHrp5izWM8MJieqxgF-v4oZQcbpkvo_quQSFA&s"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 className="text-xl font-bold">SMK Putra Anda Binjai</h1>
                <p className="text-gray-700">Bimbingan Konseling</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <Link
                    href={`https://wa.me/083191319297`}
                    className="flex items-center text-white py-2 px-3 uppercase rounded bg-green-600 hover:bg-green-700 gap-2 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >
                    Hubungi Guru BK <FaWhatsapp />
                  </Link>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              {/* <div className="flex flex-col">
                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                        <ul>
                            <li className="mb-2">JavaScript</li>
                            <li className="mb-2">React</li>
                            <li className="mb-2">Node.js</li>
                            <li className="mb-2">HTML/CSS</li>
                            <li className="mb-2">Tailwind Css</li>
                        </ul>
                    </div> */}
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9 min-h-[80vh]">
            <div className="bg-white shadow rounded-lg p-6">
              <h1 className="text-center text-2xl font-bold my-3">
                Peraturan Sekolah
              </h1>

              <div className="relative flex flex-col overflow-x-auto shadow-md sm:rounded-lg my-4 h-[65vh]">
                <Tambah setNewVisi={setNewVisi} />
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        No.
                      </th>
                      <th
                        scope="col"
                        className="text-center px-6 py-3 w-[700px]"
                      >
                        Peraturan
                      </th>
                      <th scope="col" className="text-center px-6 py-3">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody ref={parentAnimate}>
                    {newVisi.length ? (
                      newVisi.map((p) => (
                        <tr key={uuid()} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {p.id}.
                          </th>
                          <td className="px-6 py-4">{p.rule}</td>

                          <td className="px-6 py-4 flex gap-3">
                            <Edit data={p} setNewVisi={setNewVisi}/>
                            <Button
                              onClick={() => deleteRule(p.id)}
                              className="bg-red-800 text-white"
                            >
                              Hapus
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          colSpan={3}
                          className="px-6 py-4 text-center text-2xl font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Belum ada peraturan.
                        </th>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* 
              <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
