let input = document.querySelector("#qrText");
let generateBtn = document.querySelector("#generateBtn");
let qrImage = document.querySelector("#qrImage");
let link = document.querySelector("#qrdwnld")

generateBtn.addEventListener("click", () => {
    let userinpt = input.value;
    currentFileName = input.value;  // for download name

    if (userinpt.trim() === "") {
        alert("Please Enter Something");
        return;
    }

    // Encode for protection
    let safeText = encodeURIComponent(userinpt);

    // your working URL
    let finalURL = `https://Viraj-Hingu.github.io/qr-generator/show.html?data=${safeText}`;


    // Create QR
    let apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(finalURL)}`;
    qrImage.src = apiURL;

    // Clear input optional
});

link.addEventListener("click", (e) => {
    e.preventDefault(); // IMPORTANT: Stop browser default <a> action

    if (qrImage.src || qrImage.src.includes("about:blank")) {
        alert("Generate QR first!");
        return;
    }

    link.href = qrImage.src;
    link.download = "Myqr.png";
});



