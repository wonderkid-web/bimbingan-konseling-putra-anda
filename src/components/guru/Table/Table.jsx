"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import ButtonSignout from "@/components/Auth/ButtonSignout";
import { deleteHistory } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { format } from 'date-fns';
import {id} from 'date-fns/locale/id';
import Loader from "@/components/layout/Loader";

// Format the date to include the date, time, and minutes with Indonesian locale
const formattedDate = (date) =>{ 
  
  return format(date, 'dd MMMM yyyy HH:mm', { locale: id })
}



export function DataTableDemo({ data }) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const tableRef = React.useRef(null);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

  const router = useRouter()

  const columns = [
    {
      accessorKey: "nisn",
      header: "NISN",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("nisn")}</div>
      ),
    },
    {
      accessorKey: "nama",
      header: "Nama Siswa",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("nama")}</div>
      ),
    },
    {
      accessorKey: "jenis_pelanggaran",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Pelanggaran
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("jenis_pelanggaran")}</div>
      ),
    },
    {
      accessorKey: "waktu_terjadi",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Waktu Terjadi
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const waktu_terjadi = row.getValue('waktu_terjadi')
        
        if(waktu_terjadi === undefined) return "-"
        return <div>{format(waktu_terjadi, 'dd MMMM yyyy HH:mm', { locale: id })}</div>
      },
    },
    {
      accessorKey: "waktu_selesai",
      header: ({ column }) => {
        return (
          <Button
            className="hidden"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Waktu Selesai
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const waktu_selesai = row.getValue('waktu_selesai')
        
        if(waktu_selesai === "-" || waktu_selesai === undefined) return ""
        return <div className="hidden">{format(waktu_selesai, 'dd MMMM yyyy HH:mm', { locale: id })}</div>
      },
    },
    // {
    //   accessorKey: "waktu_selesai",
    //   header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Waktu Selesai
    //         <CaretSortIcon className="ml-2 h-4 w-4" />
    //       </Button>
    //     );
    //   },
    //   cell: ({ row }) => (
    //     <div className="lowercase">{row.getValue("waktu_selesai") !== "-" ? formattedDate(row.getValue("waktu_selesai")) : '-'}</div>
    //   ),
    // },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const id = row.original.id;
        return (
          <div className="flex gap-2 items-center">
            <Link href={`history/${id}`}>Detail</Link>
            <Button
              onClick={async () => {
                try {
                  const data = await deleteHistory(id);
                  toast.success('ID :' + id + 'Berhasil dihapus')


                } catch (error) {
                  toast.error('ID :' + id + 'Gagal dihapus')
                }
                router.refresh()
              }}
            >
              Hapus
            </Button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0, //custom initial page index
        pageSize: 100, //custom default page size
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const { onDownload } = useDownloadExcel({
      currentTableRef: tableRef.current,
      filename: 'Rekapitulasi',
      sheet: 'Siswa'
  })


  return (
    <div className="w-full">
      <Toaster />
      <div className="flex justify-between items-center py-4">
      <button className="p-2 rounded-md bg-green-500 text-white font-semibold" onClick={onDownload}> Export Rekapitulasi</button>

        <Input
          placeholder="Filter NISN..."
          value={table.getColumn("nisn")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("nisn")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <div>
          <Link className="mr-2" href={"history/tambah/"}>
            <Button variant="outline" className="ml-auto">
              Tambah Siswa
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

     { !data ? <Loader /> : <div className="rounded-md border">
        <Table ref={tableRef}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <Loader />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>}
      
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
