import React, { useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import projects from "../middleware/project-data";
import { useNavigate, useParams } from "react-router-dom";

function ProjectContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ProductData = projects.filter((data) => data.stack === id);

  const GoToDescription = (id) => {
    navigate(`/description/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Box
      sx={{
        backgroundColor: "var(--text-color)",
        minHeight: "100vh",
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "var(--topic-color)",
          mb: { xs: 3, md: 5 },
          fontWeight: "bold",
          margin: "50px 0px",
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "clamp(2rem, 6vw, 4rem)",
        }}
      >
        {id} Projects
      </Typography>

      <Box
        className="container"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "center",
          width: "100%",
          margin: "50px 0px",
          maxWidth: "1200px",
        }}
      >
        {ProductData.length > 0 ? (
          ProductData.map((data, index) => (
            <Card
              key={index}
              sx={{
                cursor: "pointer",
                width: { xs: "100%", sm: "280px", md: "320px" },
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={() => GoToDescription(data.id)}
            >
              <CardMedia
                component="img"
                image={data.image[0]}
                alt={data.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <CardContent sx={{ padding: { xs: 1, md: 2 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.2rem",
                    color: "var(--another-color)",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {data.title}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "var(--another-color)",
              fontWeight: "bold",
              textAlign: "center",
              mt: 4,
            }}
          >
            No projects found for "{id}"
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ProjectContainer;
