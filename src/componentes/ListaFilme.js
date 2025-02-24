import React from 'react';

const ListaFilme = ({ filmes, onFilmeSelecionado }) => {
  return (
    <div>
      {filmes.length > 0 ? (
        filmes.map((filme) => (
          <div
            key={filme.id}
            onClick={() => onFilmeSelecionado(filme.id)}
            style={{ marginBottom: '20px', cursor: 'pointer' }}
          >
            <h3>{filme.title}</h3>
            <p>{filme.release_date}</p>
            <p>{filme.overview}</p>
            {filme.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
                alt={filme.title}
                style={{ width: '100px' }}
              />
            )}
          </div>
        ))
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </div>
  );
};

export default ListaFilme;