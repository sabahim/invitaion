const presentBtn = document.querySelector(".present-btn");
const invitation = document.querySelector(".container");
const invitationImage = document.querySelector(".invitation-png");
const particles = document.querySelector("#confetti");
const audio = document.querySelector(".sound");
const credits = document.querySelector(".credits");
const background = document.querySelector(".background");
presentBtn.addEventListener("click", showInvitation);

function showInvitation(e) {
    presentBtn.style.display = "none";

    credits.style.display = "none";
    invitation.style.display = "flex";
    invitation.style.opacity = 1;
    particles.style.display = "block";
    invitation.style.transform = "translateY(0)";
    audio.currentTime = 0; //rewind to the start of the sound
    audio.play();
}