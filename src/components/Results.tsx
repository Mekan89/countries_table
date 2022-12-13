import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";
import { FC, memo } from "react";
import useSortableData from "../hooks/useSort";
import { FilteredCountryProps } from "../utils/types";

interface ResultsProps {
    countries: FilteredCountryProps[];
}

const SortArrow = ({ direction }: { direction: string }) => {
    if (direction === "descending") {
        return <ArrowDownward sx={{ color: red[700], mb: -0.5, mr: 1 }} />;
    }
    if (direction === "ascending") {
        return <ArrowUpward sx={{ color: red[700], mb: -0.5, mr: 1 }} />;
    }
    return <></>;
};

const Results: FC<ResultsProps> = ({ countries }: ResultsProps) => {
    const { sortedItems, requestSort, sortConfig } = useSortableData(countries, { key: "name", direction: "ascending" });
    const router = useRouter();
    const theme = useTheme();
    const tableHead = ["name", "population", "area", "gini"];

    return (
        <TableContainer component={Paper}>
            <Table aria-label='customized table'>
                <TableHead sx={{ bgcolor: theme.palette.mode === "light" ? "#eeeee5" : "inherit" }}>
                    <TableRow>
                        {tableHead.map((element, index) => (
                            <TableCell key={index} sx={{ cursor: "pointer", fontWeight: 600 }} align={element !== "name" ? "right" : "left"} onClick={() => requestSort(element)}>
                                {element === sortConfig.key && <SortArrow direction={sortConfig.direction} />}
                                {element.toUpperCase()}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedItems ? (
                        sortedItems?.map(({ flags, name, population, area, gini, cca2 }) => (
                            <TableRow hover key={name} onClick={() => router.push(`/${cca2}`)} sx={{ cursor: "pointer" }}>
                                <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={flags.svg} alt={name} width={50} />
                                    {name}
                                </TableCell>
                                <TableCell align='right'>{population.toLocaleString("en-US") || 0}</TableCell>
                                <TableCell align='right'>{area.toLocaleString("en-US") || 0}</TableCell>
                                <TableCell align='right'>{gini}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <Typography>Country not found</Typography>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default memo(Results);
