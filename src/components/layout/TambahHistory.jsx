"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addHistory } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


export function TambahHistory({ siswa }) {
  const { handleSubmit, register, reset } = useForm();

  const router = useRouter()

  const onSubmit = async (payload) => {
    payload = {...payload, status: 'Bermasalah'}
    const newHistory = [...siswa.history, payload]; // Menambahkan payload ke dalam array
    const onUpdate = { ...siswa, history: newHistory };

    try {
      await addHistory(onUpdate, siswa.id);
      reset()
      toast.success("Berhasil Menambahkan History");
    } catch (e) {
      toast.error("Gagal Menambahkan History");
      toast.error(e.message);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-32 m-2" variant="outline">
          Tambah History
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">History</h4>
            <p className="text-sm text-muted-foreground">
              Tambahkan History baru pada Siswa yang bermasalah.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Nama Kasus</Label>
              <Input
                id="width"
                {...register("nama_kasus")}
                placeholder="kasus.."
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Waktu</Label>
              <Input
                {...register("waktu_terjadi")}
                id="maxWidth"
                placeholder="waktu.."
                className="col-span-2 h-8"
              />
            </div>
            <div className="flex items-center">
              <Button type="submit" className="w-full" variant="outline">
                simpan
              </Button>
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
