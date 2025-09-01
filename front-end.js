const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputFile = document.querySelector("#file");

    const formData = new FormData();
    formData.append("name", inputName.value);
    formData.append("email", inputEmail.value);

    for (let i = 0; i < inputFile.files.length; i++) {
        formData.append("file", inputFile.files[i]);
    }
    console.log(...formData);

    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
});
