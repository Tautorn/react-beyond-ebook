function PhotoList({ photos }) {
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id} className="photo-content">
          <img src={photo.url} alt={photo.description} className="photo" />
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
}