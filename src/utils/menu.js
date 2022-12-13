const menu = () => {
    const btnHam = document.querySelector(".ham_menu");
    const btnMenu = document.querySelector(".header__menu");
    const btnMenuList = btnMenu.querySelectorAll("ul li a")

    btnHam.addEventListener("click", () => {
        btnHam.classList.toggle("active");
        btnMenu.classList.toggle("active");
    });

    document.querySelectorAll(".moving li a").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // 글씨 쪼개기
    document.querySelectorAll(".split").forEach(desc => {
        let splitText = desc.innerText;
        let splitWrap = splitText.split('').join("</span><span aria-hidden='true'>");
            splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
            desc.innerHTML = splitWrap;
            desc.setAttribute("aria-label", splitText);
    })
}

export default menu