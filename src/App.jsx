import NavBar from "./NavBar.jsx";
import FoodHeader from "./FoodHeader.jsx";
import WomenPic from "./womenpic.jsx";
import CategoryCard from "./Cards.jsx";
import SelectActionCard from "./SmallCards.jsx";
import ChefPic from "./chef.jsx";

import StarIcon from "@mui/icons-material/Star";

import "./App.css";
import SaladCard from "./SaladCard.jsx";
import ServiceCard from "./ServiceCard.jsx";

function App() {
  return (
    <div className="ha3">
      <NavBar />
      <FoodHeader />
      <WomenPic />

      <SelectActionCard
        title="Spicy noodles"
        description="18.00"
        rating={3}
        img="/img/image 14.png"
        style={{ marginTop: "180px", transform: "translate(770px, 50px)" }}
      />

      <SelectActionCard
        title="Vegitarian Salad"
        description="23.00"
        rating={4}
        img="/img/image 13.png"
        style={{ marginLeft: "300px", transform: "translate(860px, -100px)" }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#ff6868",
          fontWeight: "bolder",
          marginTop: "50px",
          transform: "translate(20px,60px)",
        }}
      >
        CUSTOMERS FAVORITES
      </p>

      <h1
        style={{
          color: "black",
          textAlign: "center",
          transform: "translate(20px,-80px)",
        }}
      >
        Popular Categories
      </h1>

      <div
        className="Cards"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "60px",
          transform: "translate(10px,-50px)",
        }}
      >
        <CategoryCard
          imageSrc="/img/pngwing 4.png"
          title="Main Dish"
          count={86}
          item="dishes"
        />
        <CategoryCard
          imageSrc="/img/pngwing 6.png"
          title="Break Fast"
          count={12}
          item="break fast"
        />
        <CategoryCard
          imageSrc="/img/pngwing 3.png"
          title="Dessert"
          count={48}
          item="dessert"
        />
        <CategoryCard
          imageSrc="/img/pngwing 7.png"
          title="Browse All"
          count={255}
          item="items"
        />
      </div>

      <div>
        <p
          style={{
            textAlign: "center",
            color: "#ff6868",
            fontWeight: "bolder",
            marginTop: "50px",
            transform: "translate(-573px,50px)",
          }}
        >
          SPECIAL DISHES
        </p>

        <h1
          style={{
            color: "black",
            padding: "80px",
            marginTop: "-30px",
          }}
        >
          Standout Dishes
          <br />
          From Our Menu
        </h1>
      </div>

      <div className="Salads" style={{ transform: "translate(67px,-50px)" }}>
        <SaladCard
          title="Fattoush Salad"
          description="it's delicious trust me "
          img="/img/Fattoush salad.png"
          price="24.00"
          rating="4.9"
        />
        <SaladCard
          title="Vegetable Salad"
          description="it's delicious trust me "
          img="/img/Vegetable salad.png"
          price="26.00"
          rating="4.6"
        />
        <SaladCard
          title="Egg Salad"
          description="it's delicious trust me "
          img="/img/Egg salad.png"
          price="23.00"
          rating="4.5"
        />
        <SaladCard
          title="Cesar Salad"
          description="it's delicious trust me "
          img="https://pizza07.ca/wp-content/uploads/2025/05/Salade-Cesar-au-Poulet-Grille-2.webp"
          price="28.00"
          rating="4.8"
        />
      </div>
      <ChefPic />

      <div>
        <p
          style={{
            textAlign: "center",
            color: "#ff6868",
            fontWeight: "bolder",
            marginTop: "50px",
            transform: "translate(80px,160px)",
          }}
        >
          TESTIMONIALS
        </p>

        <h1
          style={{
            fontSize: 60,
            color: "black",
            transform: "translate(700px,160px)",
          }}
        >
          What Our Customers
          <br />
          Say About Us
        </h1>

        <p
          style={{
            transform: "translate(810px,170px)",
            fontSize: 25.5,
          }}
        >
          “I had the pleasure of dining at Foodi last night,
          <br />
          and I'm still raving about the experience! The attention
          <br /> to detail in presentation and service was impeccable”
        </p>

        <div style={{ position: "relative" }}>
          <div>
            <img
              style={{ transform: "translate(830px,172px)" }}
              src="/img/Mask group.png"
              alt=""
            />
            <img
              style={{ transform: "translate(810px,180px)" }}
              src="/img/Mask group (1).png"
              alt=""
            />
            <img
              style={{ transform: "translate(790px,180px)" }}
              src="/img/Mask group (2).png"
              alt=""
            />
          </div>

          <p
            style={{
              position: "absolute",
              top: "156px",
              left: "1090px",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#333",
            }}
          >
            Customer Feedback
          </p>

          <StarIcon
            sx={{
              color: "#FFD700",
              position: "absolute",
              top: "128px",
              left: "1090px",
              fontSize: "30px",
            }}
          />

          <p
            style={{
              position: "absolute",
              top: "200px",
              left: "1130px",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#333",
            }}
          >
            4.9 <span style={{ color: "darkgray" }}>(18.6k Reviews)</span>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",

          alignItems: "center",
          padding: "80px",
          marginTop: "200px",
          gap: "120px",
        }}
      >
        <div style={{ marginTop: "200px" }}>
          <p
            style={{
              color: "#ff6868",
              fontWeight: "bolder",
              marginBottom: "20px",
            }}
          >
            OUR STORY & SERVICES
          </p>

          <h1
            style={{
              color: "black",
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Our Culinary Journey
            <br />
            And Services
          </h1>

          <p
            style={{
              color: "gray",
              fontSize: "24px",
              marginBottom: "30px",
            }}
          >
            Rooted in passion, we curate unforgettable dining <br />
            experiences and offer exceptional services, <br />
            blending culinary artistry with warm hospitality.
          </p>

          <button
            className="ButtonOrder"
            style={{ fontSize: "18px", padding: "12px 24px" }}
          >
            Explore
          </button>
        </div>

        <div
          style={{
            marginTop: "250px",
            display: "flex",
            flexDirection: "column",
            gap: "0.1px",
          }}
        >
          <div style={{ display: "flex", gap: "0.2px" }}>
            <ServiceCard
              title="CATERING"
              description="delight your guests with our flavors and presentation"
              img="./img/fi-rr-salad.png"
            />
            <ServiceCard
              title="Fast Delivery"
              description="we deliver your order promptly to your door"
              img="./img/fi-rr-time-fast.png"
            />
          </div>

          <div style={{ display: "flex", gap: "0.2px" }}>
            <ServiceCard
              title="Online Ordering"
              description="Explore menu & order with ease using our Online Ordering "
              img="./img/fi-rr-shopping-cart-check.png"
            />
            <ServiceCard
              title="GIFT CARDS"
              description="Give the gift of exceptional dining with Foodi Gift Cards"
              img="./img/fi-rr-gift.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
