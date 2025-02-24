import React, { useEffect, useState } from 'react';
import { buscarDetalhesFilme } from '../servicos/tmdb';

const DetalhesFilme = ({ filmeId }) => {
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDetalhes = async () => {
      try {
        const detalhes = await buscarDetalhesFilme(filmeId);
        setFilme(detalhes);
      } catch (erro) {
        console.error('Erro ao buscar detalhes do filme:', erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarDetalhes();
  }, [filmeId]);

  if (carregando) return <p>Carregando...</p>;
  if (!filme) return <p>Não foi possível carregar os detalhes do filme.</p>;

  return (
    <div>
      <h2>{filme.title}</h2>
      {filme.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          style={{ width: '200px' }}
        />
      )}
      <p>{filme.overview}</p>
      <p>Data de lançamento: {filme.release_date}</p>
      <p>Avaliação: {filme.vote_average}</p>
    </div>
  );
};

export default DetalhesFilme;