import ImageCard from "./ImageCard";
import { MdOutlineShoppingBag } from 'react-icons/md';
import './ImageCardList.css'

const ImageCardList = () => {
    const imageList = [
      { name: 'All Bags', imagePath: 'https://i.postimg.cc/tCCqd9fw/Frame-461.png' },
      { name: 'Hand bag', imagePath: 'https://i.postimg.cc/15Pgkxdr/Frame-20.png' },
      { name: 'Sling Bags', imagePath: 'https://i.postimg.cc/CxxRKGSZ/Frame-22.png' },
      { name: 'Tote bag', imagePath: 'https://i.postimg.cc/8zXjf7zZ/Frame-49.png' },
      { name: 'Laptop Sleevs', imagePath: 'https://i.postimg.cc/1XSt16v3/Frame-49-1.png' },
      { name: 'Vanity Pouch', imagePath: 'https://i.postimg.cc/g272k1g5/Frame-50.png' },
      // Add other image objects here
    ];
  
    return (
      <>
      <div className="serach-header">
        <div>
            <p>Products Clothing</p>
        </div>
         
         
        <div>
        <p>15 Products <MdOutlineShoppingBag className="icon" /></p>
          
        </div>
      </div>
      <div className="productContainer">
        {imageList.map((image, index) => (
          <ImageCard key={index} name={image.name} imagePath={image.imagePath} />
        ))}
      </div>
      </>
    );
  };

  export default ImageCardList;