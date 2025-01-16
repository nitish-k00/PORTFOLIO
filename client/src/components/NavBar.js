import * as React from "react";
import "../Style/main.css";
import { Resume } from "../middleware/links";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GetInTouch from "../middleware/GetInTouch";
import { Modal } from "antd";

const drawerWidth = 240;
const navItems = ["Projects", "Skills", "Stack", "Experience", "Resume"];

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalKey, setModalKey] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const showModal = () => {
    setIsModalOpen(true);
    setModalKey((prevKey) => prevKey + 1);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const scroll = (item) => {
    if (item === "Resume") {
      window.open(`${Resume}`, "_blank");
    }

    if (typeof window !== "undefined") {
      const itemId = document.getElementById(item);
      if (itemId) {
        const offset = 50;
        const rect = itemId.getBoundingClientRect();
        const scrollPosition = window.scrollY + rect.top - offset;

        if (scrollPosition >= 0) {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      } else {
        console.log(`Element with id "${item}" not found`);
      }
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "var(--text-color)",
        color: "var(--text-color)",
        height: "100vh",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="../Image/icon.png" style={{ width: "30px" }} alt="Logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              onClick={() => scroll(item)}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "var(--text-color)",
                    }}
                  >
                    {item}
                  </Typography>
                }
                sx={{
                  backgroundColor: "var(--topic-color)",
                  padding: "20px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "var(--another-color)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "var(--main-bg)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              margin: "1px",
              display: { md: "none" },
              backgroundColor: "var(--another-color)",
              ":hover": {
                backgroundColor: "var(--text-color)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: "inline-block",
                  padding: "0px 20px",
                  color: "var(--text-color)",
                  fontWeight: "var(--font-weight-bolder)",
                }}
              >
                <img
                  src="../Image/icon.png"
                  style={{ width: "30px" }}
                  alt="Logo"
                />
              </Typography>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "var(--text-color)",
                    fontWeight: "var(--font-weight-bolder)",
                    "&:hover": {
                      backgroundColor: "var(--topic-color)",
                      color: "var(--another-color)",
                      transition: "background-color 0.3s ease",
                    },

                    marginRight: "10px",
                  }}
                  onClick={() => scroll(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { md: "none" },
              }}
            />
            <Box>
              <Button
                sx={{
                  color: "#ffff",
                  backgroundColor: "var(--another-color)",
                }}
                onClick={showModal}
              >
                Get in touch
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Modal
        title="Get in Touch"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <GetInTouch key={modalKey} />
      </Modal>
    </Box>
  );
}

export default NavBar;
