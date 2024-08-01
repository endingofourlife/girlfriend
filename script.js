document.addEventListener("DOMContentLoaded", function () {
    const surpriseButton = document.querySelector(".btn-surprise");
    const surpriseMessage = document.querySelector(".surprise-message");

    surpriseButton.addEventListener("click", function () {
        surpriseMessage.classList.toggle("hidden");
        surpriseMessage.classList.add("animate");

        setTimeout(() => {
            surpriseMessage.classList.remove("animate");
        }, 3000);
    });
});

