import { useState } from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { RiSearchLine } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => { ///functional react componenet
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleChangeOption1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleChangeOption2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <>
 
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 150,
          display: "flex",
          gap: 30,
        }}
      >
        <Button style={{ marginRight: -30 }}>
          <RiSearchLine size={24} color="black" />
        </Button>

        <Button>
          <BiShoppingBag size={24} color="black" />
        </Button>

        <Button
          variant="contained"
          style={{
            color: "white",
            background: "#39db4a",
            borderRadius: "20px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaPhoneVolume size={18} />
          <strong>Contact</strong>
        </Button>
      </div>

      <div
        style={{
          position: "absolute",
          top: 5,
          display: "flex",
          gap: 10,
          left: "38%",
          transform: "translate(-50%, -50%)",
          margin: 60,
          alignItems: "center",
        }}
      >
        <div style={{ cursor: "pointer" }}>
          <Button
            style={{
              color: "#39db4a",
              marginRight: "30px",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Home
          </Button>

          <Select
            value={selectedOption2}
            onChange={handleChangeOption2}
            displayEmpty
            variant="standard"
            disableUnderline
            IconComponent={MdKeyboardArrowDown}
            sx={{
              marginLeft: "10px",
              marginRight: "10px",
              fontWeight: "bold",
              "& .MuiSelect-icon": {
                color: "#39db4a",
              },
            }}
          >
            <MenuItem value="">
              <em>Menu</em>
            </MenuItem>
            <MenuItem value="breakfast">Breakfast</MenuItem>
            <MenuItem value="lunch">Lunch</MenuItem>
            <MenuItem value="dinner">Dinner</MenuItem>
            <MenuItem value="dessert">Dessert</MenuItem>
          </Select>
        </div>

        <div style={{ cursor: "pointer" }}>
          <Select
            value={selectedOption1}
            onChange={handleChangeOption1}
            displayEmpty
            variant="standard"
            disableUnderline
            IconComponent={MdKeyboardArrowDown}
            sx={{
              marginLeft: "10px",
              fontWeight: "bold",
              "& .MuiSelect-icon": {
                color: "#39db4a",
              },
            }}
          >
            <MenuItem value="">
              <em>Services</em>
            </MenuItem>
            <MenuItem value="breakfast">Delivery</MenuItem>
            <MenuItem value="lunch">Customer Support </MenuItem>
            <MenuItem value="dinner">Prices</MenuItem>
          </Select>
        </div>

        <div style={{ cursor: "pointer" }}>
          <Button
            style={{
              color: "#000000",
              marginRight: "30px",
              fontWeight: "bold",
            }}
          >
            Offers
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            position: "absolute",
            top: 40,
          }}
        >
          <div
            style={{
              backgroundColor: "#39db4a",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              width: 40,
              height: 40,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 0,
              fontWeight: "bold",
            }}
          >
            F
          </div>
          <div style={{ fontWeight: "bold", fontSize: 22, marginLeft: -7 }}>
            oodi
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
