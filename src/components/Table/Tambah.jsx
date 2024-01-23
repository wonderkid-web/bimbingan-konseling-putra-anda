"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function Tambah({ setNewVisi }) {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (form) => {
    try {
      toast.loading("Proses menambah...");
      const raw = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/rules`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ rule: form.peraturan }),
        }
      );

      if (raw.ok) {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/rules`)
          .then((raw) => raw.json())
          .then((res) => setNewVisi(res));
        toast.success(`Peraturan  berhasil ditambah`);
      }
    } catch (error) {
      toast.error(`Peraturan berhasil ditambah`);
      toast.error(error.message);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="justify-self-end w-fit my-3">Tambah Peraturan</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Tambah Peraturan </h4>
            <p className="text-sm text-muted-foreground">
              Tulis peraturan baru dibawah form ini.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Peraturan</Label>
              <Input
                id="width"
                className="col-span-2 h-8"
                {...register("peraturan")}
              />
            </div>
          </div>
          <Button type="submit" className="bg-red-800 text-white">
            edit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
