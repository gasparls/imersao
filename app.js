/**
 * Função para pesquisar e exibir os resultados em uma seção HTML.
 * 
 * **Observações:**
 *  - Assume que o array `dados` já contém os resultados da pesquisa, cada um sendo um objeto com as propriedades `titulo`, `descricao` e `link`.
 *  - Limpa o conteúdo anterior da seção a cada chamada para evitar duplicação de resultados.
 *  - Cria elementos HTML dinamicamente para exibir os resultados.
 * 
 * @param {Array} dados - Um array de objetos representando os resultados da pesquisa.
 * 
 */



function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
    console.log(campoPesquisa);
  
    // Limpa o conteúdo anterior da seção.
    section.innerHTML = "";

    titulo = "";
    descricao = "";
    tags = "";
  
    // Itera sobre cada resultado e cria um elemento HTML para exibir.
        for (let dado of dados) {

            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();

            console.log(titulo);

            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {
                    // Cria um div para cada resultado, com a classe "item-resultado" para estilização.
                    section.innerHTML += `
                    <div class="item-resultado">
                        <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                    `;
            }
            
            if (section.innerHTML == "") 
                { section.innerHTML = `Dado não encontrado`}
        }
  }
