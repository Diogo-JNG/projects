// Selecionar elementos necessários
const modal = document.getElementById("postModal");
const closeModal = document.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalComments = document.getElementById("modalComments"); // Elemento para os comentários

// Adicionar evento de clique nos links
document.querySelectorAll(".open-modal").forEach((link) => {
  link.addEventListener("click", async (event) => {
    event.preventDefault(); // Evitar redirecionamento

    const postUrl = link.getAttribute("href"); // URL do post

    // Abrir modal
    modal.style.display = "block";

    // Carregar conteúdo via fetch()
    try {
      const response = await fetch(postUrl);
      if (!response.ok) throw new Error(`Erro ao carregar o post: ${response.status}`);
      
      const html = await response.text();

      // Criar um elemento temporário para manipular o HTML retornado
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Extrair título, conteúdo e comentários
      const title = tempDiv.querySelector(".post-title")?.innerText || "Sem título";
      const content = tempDiv.querySelector(".post-content")?.innerHTML || "Sem conteúdo.";
      const comments = tempDiv.querySelector("#comments")?.innerHTML || "<p>Sem comentários.</p>";

      // Atualizar a modal com os dados carregados
      modalTitle.textContent = title;
      modalBody.innerHTML = content;
      modalComments.innerHTML = comments; // Adicionar os comentários na seção apropriada
    } catch (error) {
      console.error(error);
      modalBody.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
      modalComments.innerHTML = "<p>Erro ao carregar os comentários.</p>";
    }
  });
});

// Fechar a modal ao clicar no botão de fechar
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar a modal ao clicar fora dela
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Comentários 

document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentform");
  if (commentForm) {
      commentForm.addEventListener("submit", function () {
          // Aguarda 1 segundo antes de recarregar a página
          setTimeout(function () {
              location.reload();
          }, 1000);
      });
  }
});
