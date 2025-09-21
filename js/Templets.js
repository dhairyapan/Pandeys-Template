function TempletsInsert(src, content, filePath, price, templateName) {
    let main = document.getElementById("main");
    let file = filePath.toString();

    main.innerHTML += `
    <div class="contantBox">
        <div class="contantLeft">
            <img src="${src}" alt="${templateName}" class="TemplateImg">
        </div>
        <div class="contantRight">
            <h2><span>${templateName}</span> Template</h2>
            <p>${content}</p>
            <ul>
                <li><span>Price:</span> <span>${price}</span></li>
                <li><button class="btn preBtn" data-file="${file}">Preview</button></li>
            </ul>
        </div>
    </div>` 

    // ✅ Har button ke liye event lagana
    let buttons = main.querySelectorAll(".preBtn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            let filePath = btn.getAttribute("data-file");
            window.open(filePath, "_blank");
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    TempletsInsert(
        "../assets/img/Thumbnail.png",
        "This is a simple and elegant template suitable for personal portfolios and small business websites. It features a clean layout, easy navigation, and responsive design to ensure optimal viewing on all devices.",
        "../index.html",
        "₹54",
        "Blog Page"
    );

    TempletsInsert(
        "../assets/img/web template.png",
        "This is a simple and elegant template suitable for personal portfolios and small business websites. It features a clean layout, easy navigation, and responsive design to ensure optimal viewing on all devices.",
        "../Templets/Protofoil%20Templets/index1.html",
        "₹100",
        "Profile Page Templagte"
    );
});
