import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  CardActionArea,
} from "@mui/material";

const CategoryCard = ({ imageSrc, title, count,item, onClick }) => {
  return (
    <Card
      sx={{
        backgroundColor: "white",
        borderRadius: "70px",
        width: "250px",
        height: "250px",
        boxShadow: "0 5px 10px 5px rgba(0, 0, 0, 0.08)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "120px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            position: "relative",
          }}
        >
          <Avatar
            src="/img/Ellipse 16.png"
            alt=""
            sx={{
              width: "120px",
              height: "120px",
              position: "absolute",
            }}
          />
          <Avatar
            src={imageSrc}
            alt={title}
            sx={{
              width: "90px",
              height: "90px",
              zIndex: 1,
            }}
          />
        </Box>

        <CardContent>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "gray" }}>
            ({count} {item})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
