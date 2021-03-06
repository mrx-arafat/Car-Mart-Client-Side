import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import useAuth from "../../../hooks/useAuth";
import Button from "@mui/material/Button";

const Orders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState();

  //for data load

  useEffect(() => {
    const url = `https://radiant-shelf-17408.herokuapp.com/orders?email=${user.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Ordered By : {user.displayName}</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell>Buyer Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Car</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.customerName}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.serviceName}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Button variant="contained">Proceed</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
