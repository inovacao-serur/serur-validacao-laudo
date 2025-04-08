"use client"

import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { useState } from "react"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export function DataTable({ columns, data }) {
    const [sorting, setSorting] = useState([])
    const [page, setPage] = useState(null)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    })

    const pageIndex = table.getState().pagination.pageIndex;
    const pageSize = table.getState().pagination.pageSize;
    const rowCount = table.getFilteredRowModel().rows.length;
    
    const start = pageIndex * pageSize;
    const end = Math.min((pageIndex + 1) * pageSize, rowCount);



    return (
        <div className="rounded-b-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="lg:py-2">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className=" bg-white"
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="lg:py-4">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Anterior
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                   Próximo
                </Button>
            </div> */}

            <Pagination className=" bg-white py-4 pr-4 flex justify-end items-center border-t border-gray-300 rounded-b-md flex-col lg:flex-row-reverse lg:justify-between">

                <PaginationContent>

                    <PaginationItem>
                        <Button
                            onClick={() => table.previousPage()}
                            className="bg-white text-black border-1 border-gray-100 hover:bg-white cursor-pointer"
                        >Anterior</Button>
                    </PaginationItem>

                    {(() => {
                        const totalPages = table.getPageCount();
                        const currentPage = table.getState().pagination.pageIndex;
                        const pageWindow = 3;

                        let start = Math.max(currentPage - Math.floor(pageWindow / 2), 0);
                        let end = start + pageWindow;

                        if (end > totalPages) {
                            end = totalPages;
                            start = Math.max(end - pageWindow, 0);
                        }

                        return Array.from({ length: end - start }, (_, i) => {
                            const pageIndex = start + i;
                            return (
                                <PaginationItem key={pageIndex}>
                                    <PaginationLink
                                        onClick={() => table.setPageIndex(pageIndex)}
                                        isActive={pageIndex === currentPage}
                                        className="cursor-pointer"
                                    >
                                        {pageIndex + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        });
                    })()}


                    <PaginationItem>
                        <Button
                            onClick={() => table.nextPage()}
                            className="bg-white text-black border-1 border-gray-100 hover:bg-white cursor-pointer"
                        >Próximo</Button>
                    </PaginationItem>

                </PaginationContent>

                <p className="text-sm text-muted-foreground pt-1.5 lg:pl-4">
                    Mostrando {start }–{end} de {rowCount} resultados
                </p>
            </Pagination>


        </div>
    )
}