import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Form_page.css";
import Axios from "axios";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Form_page = () => {
  const [Reponame, setReponame] = useState("");
  const [Status, setStatus] = useState("");
  const [QueuedAt, setQueuedAt] = useState();
  const [ScanningAt, setScanningAt] = useState();
  const [FinishedAt, setFinishedAt] = useState();
  const [Ruleid, setRuleid] = useState("");
  const [description, setdescription] = useState("");
  const [Severity, setSeverity] = useState("");
  const [Pathname, setPathname] = useState("");

  const addEmployee = () => {
    Axios.post("http://localhost:8080/api/v1/employee", {
      Reponame: Reponame,
      Status: Status,
      QueuedAt: QueuedAt,
      ScanningAt: ScanningAt,
      FinishedAt: FinishedAt,
      Ruleid: Ruleid,
      description: description,
      Severity: Severity,
      Pathname: Pathname,
    }).then(() => {
      console.log("done");
    }); 
    console.log(Status);
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ p: 3, width: "100%" }}>
          <DrawerHeader />

          <form action="#">
            <div>
              <h1>Data Input Form</h1>
            </div>

            <div className="user-details">

              <div className="input-box">
                <span className="details">Repository Name*</span>
                <input
                  type="string"
                  placeholder="Enter your Repository Name"
                  required
                  onChange={(event) => {
                    setReponame(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span for="cars" className="details">
                  Status*
                </span>
                <select
                  name="cars"
                  id="cars"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setStatus(event.target.value);
                  }}

                >
                  <option value="Queued">Queued</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Success">Success</option>
                  <option value="Failure">Failure</option>
                </select>
              </div>

              <div className="input-box">
                <span className="details">QueuedAt</span>
                <input
                  type="datetime-local"
                  placeholder="Enter Queued Timing"
                  onChange={(event) => {
                    setQueuedAt(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">ScanningAt</span>
                <input
                  type="datetime-local"
                  placeholder="Enter Scan Process Timing"
                  onChange={(event) => {
                    setScanningAt(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">FinishedAt</span>
                <input
                  type="datetime-local"
                  placeholder="Enter your Scan Finish Timing"
                  onChange={(event) => {
                    setFinishedAt(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <h3>Findings</h3>
            </div>

            <div className="user-details">
              <div className="input-box">
                <span className="details">RuleId*</span>
                <input
                  type="string"
                  placeholder="Eg: G402"
                  required
                  onChange={(event) => {
                    setRuleid(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">Description*</span>
                <input
                  type="string"
                  placeholder="Eg: TLS InsecureSkipVerify set true."
                  required
                  onChange={(event) => {
                    setdescription(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">Severity*</span>
                <input
                  type="string"
                  placeholder="Eg: HIGH"
                  required
                  onChange={(event) => {
                    setSeverity(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">Path Name*</span>
                <input
                  type="string"
                  placeholder="Eg: connectors/apigateway.go"
                  required
                  onChange={(event) => {
                    setPathname(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="divaddButton">
              <button className="addButton" type="submit" onClick={addEmployee}>
                SUBMIT
              </button>
            </div>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Form_page;
