import React, { useState } from 'react';

const BarraPesquisa = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    onSearch(query); // Passa a query para a função de busca
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o nome do filme..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default BarraPesquisa;