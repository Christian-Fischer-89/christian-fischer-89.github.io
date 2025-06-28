//load sections
document.addEventListener("DOMContentLoaded", async function () {
    const sections_data = await fetch("sections/sections.txt");
    const count = await sections_data.text();
    for (let i = 0; i <= count; i++) {
        var section = document.createElement("section");
        section.id = `section-${i}`;
        section.className = "container";
        section.style.backgroundImage = `url("sections/images/${i}.jpg")`;
        document.querySelector("main").append(section);
    }
    loadSections();
});

//load sections headings, texts and images 
function loadSections() {
    document.querySelectorAll("section").forEach(async text => {
        var sectionPos = text.id.substring(text.id.indexOf("-") + 1);
        var section_heading_div = document.createElement("div");
        section_heading_div.className = "section-heading-div";
        text.append(section_heading_div);
        var section_text_div = document.createElement("div");
        section_text_div.className = "section-text-div";
        text.append(section_text_div);
        var section_heading = document.createElement("h2");
        section_heading.id = `section-${sectionPos}-heading`;
        section_heading_div.append(section_heading);
        var section_text = document.createElement("pre");
        section_text.id = `section-${sectionPos}-text`;
        section_text_div.append(section_text);
        var textData = await fetch("sections/" + sectionPos + ".txt");
        var loadText = await textData.text();
        var section_heading_content = loadText.slice(0, loadText.indexOf("\n"));
        section_heading.innerHTML = section_heading_content;
        var section_text_content = loadText.slice(loadText.indexOf("\n") + 1, loadText.length);
        section_text.innerHTML = section_text_content;
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