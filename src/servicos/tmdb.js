import axios from 'axios';

// Configuração base do axios para a API do TMDB
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // URL base da API
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY, // Chave da API (armazenada no .env)
  },
});

/**
 * Busca filmes com base em uma query (termo de pesquisa).
 * @param {string} query - Termo de pesquisa.
 * @returns {Array} - Lista de filmes encontrados.
 */
export const buscarFilmes = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query,
      },
    });
    return response.data.results; // Retorna apenas os resultados da busca
  } catch (erro) {
    console.error('Erro ao buscar filmes:', erro);
    return []; // Retorna uma lista vazia em caso de erro
  }
};

/**
 * Busca detalhes de um filme específico pelo ID.
 * @param {number} filmeId - ID do filme.
 * @returns {Object} - Detalhes do filme.
 */
export const buscarDetalhesFilme = async (filmeId) => {
  try {
    const response = await api.get(`/movie/${filmeId}`);
    return response.data; // Retorna os detalhes do filme
  } catch (erro) {
    console.error('Erro ao buscar detalhes do filme:', erro);
    return null; // Retorna null em caso de erro
  }
};

/**
 * Busca filmes populares (opcional, para uma página inicial).
 * @returns {Array} - Lista de filmes populares.
 */
export const buscarFilmesPopulares = async () => {
  try {
    const response = await api.get('/movie/popular');
    return response.data.results; // Retorna os filmes populares
  } catch (erro) {
    console.error('Erro ao buscar filmes populares:', erro);
    return []; // Retorna uma lista vazia em caso de erro
  }
};