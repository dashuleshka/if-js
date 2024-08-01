const formEl = document.getElementById("uploadForm");
const imgEl = document.getElementById("preview-image");
const fileInput = document.getElementById("fileInput");
imgEl.addEventListener("click", () => {
    fileInput.click();
});

formEl.addEventListener("change", async function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        imgEl.setAttribute("src", reader.result);
        imgEl.setAttribute("alt", fileInput.files[0].name);
    });

    reader.readAsDataURL(fileInput.files[0]);
});

formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    if (fileInput.files.length > 0) {
        try {
            const response = await fetch(
                "https://if-student-api.onrender.com/api/file",
                {
                    method: "POST",
                    body: formData,
                },
            );
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                console.error("Ошибка загрузки файла:", response.statusText);
            }
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }
});