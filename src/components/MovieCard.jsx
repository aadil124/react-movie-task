import React from 'react';

const MovieCard = ({ data, filterCardData }) => {

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
      {filterCardData().map((card, index) => (
        <>
          <div className="col" key={index}>
            <div className="card h-80">
              <img src={card.posterUrl} className="card-img-top h-100" alt={card.title} />
              <div className="card-body text-center">
                <h3 className="card-title">{card.title}</h3>
                <h4 className="card-title">{card.year}</h4>
              </div>
            </div>
          </div>
        </>
      )
      )}
    </div>
  )
}

export default MovieCard;