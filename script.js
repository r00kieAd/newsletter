if (screen.width > 500) {
    document.querySelector(".Dimg").src = "images/desktop-view.png";
}

if (screen.width > 1550) {
    document.querySelector(".main").style.width = "none";
}

function highlightBox(j, f) {
    if (j == 1) {
        f.classList.remove("inputEmail");
        f.classList.add("inputEmailII");
    } else {
        f.classList.add("inputEmail");
        f.classList.remove("inputEmailII");
    }
}

function enterKey(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        return false;
    }
}

function subscribe() {
    const e = document.querySelector("#emailInput");
    let emailInput = e.value;
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsCorrect = emailFormat.test(emailInput);
    if (emailIsCorrect) {
        e.classList.remove("inputEmailIII");
        e.classList.add("inputEmail");
        var url = "thankyoupage.html?emailInput=" + encodeURIComponent(emailInput);
        window.location.href = url;
    } else {
        e.classList.remove("inputEmail");
        e.classList.add("inputEmailIII");
        document.querySelector(".errorMsg").style.visibility = "visible";
    }
}

function dismiss() {
    window.location.href = 'index.html';
}

function changeColor(i, e) {
    if (i == 1) {
        e.style.backgroundColor = "hsl(4, 100%, 67%)";
        e.style.borderColor = "hsl(4, 100%, 67%)";
        e.style.boxShadow = "2px 3px 16px hsl(4, 100%, 67%)";
    } else {
        e.style.backgroundColor = "hsl(234, 29%, 20%)";
        e.style.borderColor = "hsl(234, 29%, 20%)";
        e.style.boxShadow = "none";
    }
}