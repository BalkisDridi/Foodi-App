import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import StarIcon from "@mui/icons-material/Star";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function SaladCard({ title, description, img, price, rating, style }) {
  return (
    <Box style={style}>
      <Card
        sx={{
          borderRadius: "20px",
          boxShadow: "0 10px 10px 5px rgba(0, 0, 0, 0.08)",
          width: 320,
          margin: "20px",
          height: "400px",
        }}
      >
        <CardActionArea
          sx={{
            borderRadius: "20px",
            alignItems: "center",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Button
            onClick={() => {}}
            sx={{
              borderRadius: "50%",
              width: 60,
              height: 60,
              transform: "translate(135px, -10px)",
              padding: 0,
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src="/img/leaf.png"
                alt=""
                style={{
                  width: 70,
                  height: 70,
                }}
              />
              <FaRegHeart
                style={{
                  position: "absolute",
                  top: "32px",
                  left: "24px",
                  color: "white",
                  fontSize: "20px",
                }}
              />
            </div>
          </Button>

          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 2,
              marginBottom: 1,
              marginTop: -4,
            }}
          />

          <CardContent
            sx={{
              padding: 0,
              flex: 1,
              width: "100%",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{
                transform: "translate(43px,3px)",
                fontSize: "20px",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "darkgray",
                fontWeight: "bold",
                transform: "translate(43px,3px)",
                mt: 1,
              }}
            >
              {description}
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                transform: "translate(43px,3px)",
                height: "20px",
                width: "50",
                fontSize: "30px",

                mt: 2,
              }}
            >
              <span style={{ color: "#ff6868" }}>$</span>
              {price}
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                color: "gray",
                display: "flex",
                position: "absolute",
                right: 20,
                bottom: 15,
                fontSize: "20px",
              }}
            >
              <StarIcon
                sx={{
                  color: "#FFD700",
                  position: "relative",
                  top: "3px",
                  marginRight: "5px",
                }}
              />
              {rating}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default SaladCard;
