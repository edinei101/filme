import React, { useState, useEffect } from 'react';
import { buscarFilmes, buscarDetalhesFilme, buscarFilmesPopulares } from './servicos/tmdb';
import BarraPesquisa from './componentes/BarraPecquisa';
import ListaFilme from './componentes/ListaFilme';
import DetalhesFilme from './componentes/DetalhesFilme';
import './App.css';

const App = () => {
  const [filmes, setFilmes] = useState([]);
  const [filmeSelecionadoId, setFilmeSelecionadoId] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      setErro('Por favor, insira um termo de busca.');
      return;
    }

    setCarregando(true);
    setErro(null);

    try {
      const resultados = await buscarFilmes(query);
      if (resultados.length === 0) {
        setErro('Nenhum filme encontrado.');
      }
      setFilmes(resultados);
      setFilmeSelecionadoId(null); // Reseta o filme selecionado ao fazer nova busca
    } catch (erro) {
      setErro('Erro ao buscar filmes. Tente novamente mais tarde.');
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    const carregarFilmesPopulares = async () => {
      setCarregando(true);
      setErro(null);

      try {
        const filmesPopulares = await buscarFilmesPopulares();
        setFilmes(filmesPopulares);
      } catch (erro) {
        setErro('Erro ao carregar filmes populares.');
        console.error(erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarFilmesPopulares();
  }, []);

  return (
    <div className="App">
      <h1>Busca de Filmes</h1>
      <BarraPesquisa onSearch={handleSearch} />
      {erro && <p className="erro">{erro}</p>}
      {carregando && <p>Carregando...</p>}
      {filmeSelecionadoId ? (
        <DetalhesFilme filmeId={filmeSelecionadoId} />
      ) : (
        <ListaFilme filmes={filmes} onFilmeSelecionado={setFilmeSelecionadoId} />
      )}
    </div>
  );
};

export default App;