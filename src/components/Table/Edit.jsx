"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function Edit({ data, setNewVisi }) {
  const { handleSubmit, register, setValue } = useForm();

  const onSubmit = async (form) => {
    try {
      toast.loading("Proses mengedit...");
      const raw = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/rules/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...data, rule: form.peraturan }),
        }
      );

      if (raw.ok) {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/rules`)
          .then((raw) => raw.json())
          .then((res) => setNewVisi(res));
        toast.success(`Peraturan dengan ID: ${data?.id} berhasil di edit`);
      }
    } catch (error) {
      toast.error(`Peraturan dengan ID: ${data?.id} gagal di edit`);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setValue("peraturan", data.rule);
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit Peraturan </h4>
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
