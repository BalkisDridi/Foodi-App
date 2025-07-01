const WomenPic = () => {
  return (
    <>
      <div
        style={{
          height: "30vw",
          width: "30vw",
          borderRadius: "50%",
          overflow: "hidden",
          position: "absolute",
          top: "30.9vh",
          left: "60vw",
        }}
      >
        <img
          src="/img/Rectangle 9.png"
          alt="Circle"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          height: "36vw",
          width: "36vw",
          borderRighRadius: "50%",
          position: "absolute",
          top: "18.1vh",
          left: "54.6vw",

          objectFit: "cover",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src="/img/Intersect.png"
          alt="women"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "34vh",
          left: "45vw",

          objectFit: "cover",
        }}
      >
        <img src="/img/Rectangle 24.png" alt="comment buble" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "41vh",
          left: "49.6vw",

          objectFit: "cover",
        }}
      >
        <img src="/img/peper.png" alt="peper" />
      </div>
    </>
  );
};
export default WomenPic;
