import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Result_list.css";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Result_list = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:8080/getdata").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ p: 3, width: "100%" }}>
          <DrawerHeader />
          <div>
            <div className="divaddButton">
              <button type="submit" className="addButton" onClick={getEmployees}>
                show data
              </button>
            </div>
            <div>
              {employeeList.map((val) => {
                return (
                  <div className="employee">
                    <div className="info">
                      <h3>
                        {" "}
                        <b>Repo Name: </b>
                        {val.Reponame}
                      </h3>
                      <h3>
                        <b> Status: </b>
                        {val.Status}
                      </h3>
                      <h3>
                        {" "}
                        <b>Ruleid: </b>
                        {val.Ruleid}
                      </h3>
                      <h3>
                        {" "}
                        <b>Description: </b>
                        {val.Description}
                      </h3>
                      <h3>
                        {" "}
                        <b>Severity: {val.Severity}</b>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Result_list;
