let input = document.querySelector("#qrText");
let generateBtn = document.querySelector("#generateBtn");
let qrImage = document.querySelector("#qrImage");
let link = document.querySelector("#qrdwnld");

let qrGenerated = false;

generateBtn.addEventListener("click", () => {
    let userinpt = input.value.trim();

    if (userinpt === "") {
        alert("Please Enter Something");
        return;
    }

    let safeText = encodeURIComponent(userinpt);
    let finalURL = `https://viraj-hingu.github.io/qr-generator/show.html?data=${safeText}`;
    let apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(finalURL)}`;

    qrImage.src = apiURL;
    qrGenerated = true;
});

link.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!qrGenerated) {
        alert("Generate QR first!");
        return;
    }

    // Fetch the QR image as a blob
    const response = await fetch(qrImage.src);
    const blob = await response.blob();

    // Create a temp object URL
    const url = URL.createObjectURL(blob);

    // Trigger force download
    const a = document.createElement("a");
    a.href = url;
    a.download = "Myqr.png";
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
