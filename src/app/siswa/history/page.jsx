import { DataTableDemo } from "@/components/Table/Table";
import { Table } from "@/components/ui/table";
import React from "react";

const getHistory = async () =>{
  const raw = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/history`)
  return raw.json()
}


export default async function page() {
  const history = await getHistory()
  return (
    <div>
      <div className="w-2/3 mx-auto">
        <DataTableDemo data={history}  />
      </div>
    </div>
  );
}
