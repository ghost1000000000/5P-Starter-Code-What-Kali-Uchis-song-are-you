let button = document.querySelector(".submit");
let fullParagraph = document.querySelector(".result");

button.onclick = function() {
    fullParagraph.style.display = "block";
    let music = document.querySelector(".music").value;
    let insideout = document.querySelector(".Lenguague").value;
    if (music === "chill" && insideout === "spanish" ) {
         fullParagraph.innerHTML = "your kali song is young rich & inlove";
    } else if (music === "chill" && insideout === "english") {
        fullParagraph.innerHTML = "your kali uchis song is Dame beso//muevete ";
    }
    if (music === "Chill" && insideout ===  "Spanish" ) {
         fullParagraph.innerHTML = "Your Kali Song is Igual Que Un Angel.";
        console.log("hi");
    } else if (music === "Dancing" && insideout === "English" ) {
    // let animal = document.querySelector(".animal").value;
    fullParagraph.innerHTML = "your song is Young Rich & Inlove";
        fullParagraph.innerHTML = "your song is Young Rich & Inlove";
         fullParagraph.innerHTML = "your song is Young Rich & Inlove";
    }
};