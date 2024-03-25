"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { deleteHistory, updateHistory } from "@/utils/actions";
import { toast } from "sonner";
import { format } from "date-fns";
import uuid from "react-uuid";
import { IoTrashOutline } from "react-icons/io5";
import { Separator } from "@radix-ui/react-dropdown-menu";

const type_status = ["Bermasalah", "Proses", "Selesai"];

export default function UpdateStatus({ siswa, index }) {
  const onUpdateHistory = async (type) => {
    const tanggalSekarang = new Date();
    // Format tanggal, jam, menit, dan detik
    siswa.waktu_selesai = tanggalSekarang;

    const newStatus = siswa;
    try {
      await updateHistory(newStatus, siswa.id);

      toast.success("Berhasil Merubah Status History");
    } catch (e) {
      toast.error("Gagal Merubah Status History");
      toast.error(e.message);
    }
  };

  const onDeleteHistory = async () => {
    const newStatus = siswa.history.filter((hist, currIn) => currIn != index);

    try {
      await updateHistory(newStatus, siswa.id);

      toast.success("Berhasil Merubah Status History");
    } catch (e) {
      toast.error("Gagal Merubah Status History");
      toast.error(e.message);
    }
  };

  return (
   <button className="p-2 rounded-md bg-red-500 text-white font-semibold mx-auto hover:bg-red-600 hover:scale-110" onClick={() => onUpdateHistory()}>Selesai</button>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" className="h-8 w-8 p-0">
    //       <span className="sr-only">Open menu</span>
    //       <DotsHorizontalIcon className="h-4 w-4" />
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //     <Separator />
    //     {type_status.map((type) => (
    //       <DropdownMenuItem key={uuid()} onClick={() => onUpdateHistory(type)}>
    //         {type}
    //       </DropdownMenuItem>
    //     ))}

    //     {/* <DropdownMenuItem
    //       className="flex items-center gap-2"
    //       onClick={() => onDeleteHistory()}
    //     >
    //       Hapus <IoTrashOutline />
    //     </DropdownMenuItem>
    //      */}
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
