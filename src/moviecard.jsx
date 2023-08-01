<div className="movie">
<div>
  <p>{movie1.Year}</p>
</div>
<div>
  <img
  src={movie1.Poster !== 'N/A '? movie1.Poster:'htpps://via.placeholder.com/400'}
   alt="movie1.title"
  />
</div>
<div>
  <span>
    {movie1.Type}
  </span>
  <h3>{movie1.Title}</h3>
</div>
</div>