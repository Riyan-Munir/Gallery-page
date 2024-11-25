const Images = ({ data, onClick }) => (
    <div className="images-container">
      {data.map((slide, index) => (
        <div key={index} className="image" onClick={() => onClick(index)}>
          <img src={slide.src} alt={slide.description} />
        </div>
      ))}
    </div>
);
  
export default Images;  