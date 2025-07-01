
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function SelectActionCard({ title, description, rating, img, style }) {
  const indexes = [0, 1, 2, 3, 4];
  return (
    <Box sx={{ display: "flex" }} style={style}>
      <Card
        sx={{
          borderRadius: "20px",
          boxShadow: "0 10px 10px 5px rgba(0, 0, 0, 0.08)",
          width: 250,
          margin: "20px",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
          }}
        >
          <Box
          
            component="img"
            src={img}
            alt={title}
            sx={{
              width: 80,
              height: 80,
              borderRadius: 2,
              objectFit: "cover",
              marginRight: 2,
            }}
            

          />

          <img src="" alt="" srcset="" />
          <CardContent
            sx={{
              padding: 0,
              justifyContent: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {indexes.map((i) =>
                i < rating ? (
                  <StarIcon
                    key={i}
                    fontSize="small"
                    sx={{ color: "#FFD700" }}
                  />
                ) : (
                  <StarBorderIcon
                    key={i}
                    fontSize="small"
                    sx={{ color: "#FFD700" }}
                  />
                )
              )}
            </Box>
            <Typography sx={{fontWeight:"bold"}} >
               <span style={{ color: "#ff6868", whiteSpace: "nowrap", }}>$</span>
               {description }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default SelectActionCard;
