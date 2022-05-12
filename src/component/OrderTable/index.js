import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Modal from "../Modal";

const SortedTable = ({ rows, buttonLabel, icon, isModalOpen }) => {
  const [rowData, setRowData] = useState(rows);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const sortArray = (arr, orderBy) => {
    switch (orderBy) {
      case "asc":
      default:
        return arr.sort((a, b) => (a.fee > b.fee ? 1 : b.fee > a.fee ? -1 : 0));
      case "desc":
        return arr.sort((a, b) => (a.fee < b.fee ? 1 : b.fee < a.fee ? -1 : 0));
    }
  };

  const handleSortRequest = () => {
    setRowData(sortArray(rows, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(isModalOpen);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          backgroundColor: "#fff",
          boxShadow: "rgb(0 0 0 / 5%) 0px 1px 1px 0px",
        }}
      >
        <Modal handleClose={handleClose} open={open} />
        <TableContainer component={Paper} sx={{ py: 0, boxShadow: "unset" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  "& .MuiTableCell-root": {
                    color: "#1976D2",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  },
                }}
              >
                <TableCell>order date</TableCell>
                <TableCell
                  align="justify"
                  sx={{ borderBottom: "3px solid #1976D2" }}
                  onClick={handleSortRequest}
                >
                  <TableSortLabel
                    active={true}
                    direction={orderDirection}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      "& .MuiTableSortLabel-icon": {
                        color: "#1c68c4 !important",
                      },
                      "&.MuiTableSortLabel-root": {
                        color: "#1976D2",
                      },
                    }}
                  >
                    address
                  </TableSortLabel>
                </TableCell>
                <TableCell>order type</TableCell>
                <TableCell>due date</TableCell>
                <TableCell align="center">fee</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.orderDate}>
                    <TableCell component="th" scope="row">
                      {row.orderDate}
                    </TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.orderType}</TableCell>
                    <TableCell>{row.dueDate}</TableCell>
                    <TableCell align="center">{row.fee}</TableCell>
                    {buttonLabel && (
                      <TableCell align="center">
                        <Button variant="outlined" onClick={handleOpen}>
                          {buttonLabel} {icon}
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ display: "flex", justifyContent: "center", my: 2 }}
      />
    </>
  );
};
export default SortedTable;
