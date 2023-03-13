import React from "react";
import { useState, useEffect } from "react";
// import Axios from "axios";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Result_list.css";
import { Link } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Result_list = () => {


  const route = "/Finding_list";

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/getdata")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response data to the console
        setData(data);
      });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ p: 3, width: "100%" }}>
          <DrawerHeader />
          <div >
            <div >
              <table>
                <thead>
                  <th>Repo Name</th>
                  <th>Status</th>
                  <th>QueuedAt</th>
                  <th>ScanningAt</th>
                  <th>FinishedAt</th>
                  <th>Findings</th>
                </thead>
                <tbody>
                  {data &&
                    data.map((val) => {
                      return (
                        <tr>
                          <td>{val.Reponame}</td>
                          <td>{val.Status}</td>
                          <td>{val.QueuedAt}</td>
                          <td>{val.ScanningAt}</td>
                          <td>{val.FinishedAt}</td>
                          <td>
                            <Link
                              to={route}
                              style={{
                                textDecoration: "none",
                                display: "flex",
                                color: "inherit",
                              }}
                            >
                              <h3 style={{ fontSize: "bold" }}>Click Here</h3>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Result_list;
