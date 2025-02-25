document.addEventListener("DOMContentLoaded", function () {
    let mediaUploader;

    // Botão para selecionar imagem
    const uploadButton = document.getElementById("upload-custom-image");
    const removeButton = document.getElementById("remove-custom-image");
    const imagePreview = document.getElementById("custom-image-preview");
    const imageInput = document.getElementById("custom-image-id");

    // Abrir a biblioteca de mídia ao clicar no botão "Selecionar Imagem"
    uploadButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Se o mediaUploader já foi inicializado, reabri-lo
        if (mediaUploader) {
            mediaUploader.open();
            return;
        }

        // Criar o uploader de mídia
        mediaUploader = wp.media({
            title: "Selecionar Imagem",
            button: {
                text: "Usar esta imagem",
            },
            multiple: false, // Apenas uma imagem pode ser selecionada
        });

        // Quando uma imagem for selecionada
        mediaUploader.on("select", function () {
            const attachment = mediaUploader.state().get("selection").first().toJSON();
            imageInput.value = attachment.id; // Salvar o ID da imagem no campo oculto
            imagePreview.src = attachment.url; // Atualizar a pré-visualização da imagem
            imagePreview.style.display = "block"; // Mostrar a pré-visualização
        });

        mediaUploader.open();
    });

    // Remover a imagem ao clicar no botão "Remover Imagem"
    removeButton.addEventListener("click", function (e) {
        e.preventDefault();
        imageInput.value = ""; // Limpar o campo oculto
        imagePreview.src = ""; // Remover a URL da imagem na pré-visualização
        imagePreview.style.display = "none"; // Ocultar a pré-visualização
    });
});
