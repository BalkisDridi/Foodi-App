const ChefPic = () => {
  return (
    <>
      <div
        style={{
          height: "",
          width: "",
          overflow: "hidden",
          position: "absolute",
          top: "2560px",
          left: "89.9px", 
        }}
      >
        <img
          src="/img/behindChef.png"
          style={{
            objectFit: "cover",
     
          }}
        />
      </div>
      <div
        style={{
          height: "50vw",
          width: "34vw",
          position: "absolute",
          top: "2230px",
          left: "80px", 
          objectFit: "cover",
        }}
      >
        <img src="/img/chef.png" alt="Chef" />
      </div>

      <img
        style={{
          position: "absolute",
          top: "2630px",
          left: "551px", 
        }}
        src="/img/🍕.png"
        alt="PizzaSticker"
      />
      <img
        style={{
          position: "absolute",
          top: "2730px",
          left: "71px", 
        }}
        src="/img/😋.png"
        alt="PizzaSticker"
      />
    </>
  );
};
export default ChefPic;
