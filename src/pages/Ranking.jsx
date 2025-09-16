import React, { useState, useEffect } from "react";

function Ranking() {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setGrupos(data.grupos))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className=" text-centermb-4">Ranking de Grupos</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Posição</th>
              <th scope="col">Grupo</th>
              <th scope="col">Pontos</th>
            </tr>
          </thead>
          <tbody>
            {grupos
              .sort((a, b) => a.posicao - b.posicao)
              .map((grupo) => (
                <tr key={grupo.posicao}>
                  <th scope="row">{grupo.posicao}</th>
                  <td>{grupo.nome}</td>
                  <td>{grupo.pontos}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;