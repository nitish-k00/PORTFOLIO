import React from "react";
import "../Style/Services.css";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { useNavigate } from "react-router-dom";

function Stack() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid" id="Stack">
      <div className="row main">
        <div className="col-0 col-md-2 col-lg-3 services">
          <h1>STACK</h1>
        </div>
        <div className="col boxx">
          <div className="boxes">
            <div className="row box-group">
              <div className="col col1">
                <div
                  className="row col1-row1"
                  onClick={() => navigate("project/fullstack")}
                  style={{ cursor: "pointer" }}
                >
                  <p>FULL STACK</p>
                  <p> PROJECT</p>
                  <div className="link">
                    <AttachmentIcon />
                  </div>
                </div>
                <div
                  className="row col1-row2"
                  onClick={() => navigate("project/basic")}
                  style={{ cursor: "pointer" }}
                >
                  <p>BASIC</p>
                  <p>PROJECT</p>
                  <div className="link">
                    <AttachmentIcon />
                  </div>
                </div>
              </div>
              <div className="col col2">
                <div
                  className="row col2-row1"
                  onClick={() => navigate("project/frontend")}
                  style={{ cursor: "pointer" }}
                >
                  <p>FRONT END</p>
                  <p>PROJECT</p>
                  <div className="link">
                    <AttachmentIcon />
                  </div>
                </div>
                <div
                  className="row col2-row2"
                  onClick={() => navigate("project/backend")}
                  style={{ cursor: "pointer" }}
                >
                  <p>BACK END</p>
                  <p>PROJECT</p>
                  <div className="link">
                    <AttachmentIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
