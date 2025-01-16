import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LindedIn, GitHub } from "../middleware/links";

import "../Style/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="text">
        <h1>SOCIAL PRESENCE</h1>
      </div>
      <div className="icon">
        <LinkedInIcon
          sx={{
            fontSize: "70px",
            margin: "0 20px",
            cursor: "pointer",
            "&:hover": {
              color: "var(--main-bg)",
            },
          }}
          onClick={() => window.open(`${LindedIn}`)}
        />
        <GitHubIcon
          sx={{
            fontSize: "70px",
            margin: "0 20px",
            cursor: "pointer",
            "&:hover": {
              color: "var(--main-bg)",
            },
          }}
          onClick={() => window.open(`${GitHub}`)}
        />
      </div>
      <div className="rights">
        <h4>Copyright © NITISH K | All rights reserved.</h4>
      </div>
    </div>
  );
}

export default Footer;
