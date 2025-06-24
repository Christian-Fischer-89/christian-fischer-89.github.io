//load sections
document.addEventListener("DOMContentLoaded", async function () {
    const sections_data = await fetch("sections/sections.txt");
    const count = await sections_data.text();
    for (let i = 0; i <= count; i++) {
        var section = document.createElement("section");
        section.id = `section-${i}`;
        section.className = "container";
        section.style.backgroundImage = `url("sections/images/${i}.jpg")`;
        section.style.backgroundRepeat = "no-repeat";
        section.style.backgroundSize = "100% auto";
        document.querySelector("main").append(section);
    }
    loadSections();
});

//load sections headings, texts and images 
function loadSections() {
    document.querySelectorAll("section").forEach(async text => {
        var sectionPos = text.id.substring(text.id.indexOf("-") + 1);
        var textData = await fetch("sections/" + sectionPos + ".txt");
        var loadText = await textData.text();
        var section_content = `<h2 id="section-${sectionPos}-heading">${loadText.slice(0, loadText.indexOf("\n"))}</h2>` + `<pre id="section-${sectionPos}-text">${loadText.slice(loadText.indexOf("\n") + 1, loadText.length)}</pre>`;
        text.innerHTML = section_content;
    });
}

//try images
function tryImages(img, path) {
    img.src = path + ".jpg";
    img.onerror = function() {
        img.src = path + ".JPG";
        img.onerror = function() {
            img.src = path + ".jpeg";
            img.onerror = function() {
                img.src = path + ".JPEG";
                img.onerror = function() {
                    img.src = path + ".png";
                    img.onerror = function() {
                        img.src = path + ".PNG";
                        img.onerror = function() {
                            img.parentNode.removeChild(img);
                        }
                    }
                }
            }
        }
    }
}