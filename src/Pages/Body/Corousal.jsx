import { Carousel } from 'react-carousel-minimal';

function Corousal() {
 const data = [
    {
      image: "https://i.im.ge/2022/06/16/r4MRYG.png"
    },
    {
      image: "https://i.im.ge/2022/06/16/r4MWBx.png"
    },
    {
      image: "https://i.im.ge/2022/06/16/r4MKaa.png"
    },
    {
      image: "https://i.im.ge/2022/06/16/r4MVyJ.png"
    }
  ];


  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="150px"
            radius="0 15px 0 15px"
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Corousal;