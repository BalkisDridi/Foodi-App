import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function ServiceCard({ title, description, img, style }) {
  return (
    <Box style={style}>
      <Card
        sx={{
          borderRadius: "20px",
          boxShadow: "0 10px 10px 5px rgba(0, 0, 0, 0.08)",
          width: "230px",
          margin: "20px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardActionArea
          sx={{
            borderRadius: "20px",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: 70,
              height: 70,
              borderRadius: 2,
              marginBottom: 2,
              marginTop: -1,
            }}
          />

          <CardContent
            sx={{
              padding: 0,
              textAlign: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize="20px"
              color="#5fe26c"
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#90bd95",
                fontWeight: "bold",
                fontSize: "14px",
                marginTop: 1,
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default ServiceCard;
