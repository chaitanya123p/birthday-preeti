window.onload = () => {
  document.body.classList.add("locked");
  document.getElementById("welcomePopup").classList.add("show");
};

/* WELCOME */
function closeWelcome() {
  document.getElementById("welcomePopup").classList.remove("show");
  document.body.classList.remove("locked");
  launchConfetti();
}

/* POPUPS */
function openWish() {
  document.getElementById("wishPopup").classList.add("show");
  document.body.classList.add("locked");
}

function closeWish() {
  document.getElementById("wishPopup").classList.remove("show");
  document.body.classList.remove("locked");
}

function openGift() {
  document.getElementById("giftPopup").classList.add("show");
  document.body.classList.add("locked");
}

function closeGift() {
  document.getElementById("giftPopup").classList.remove("show");
  document.body.classList.remove("locked");
}

function openPraise() {
  document.getElementById("praisePopup").classList.add("show");
  document.body.classList.add("locked");
}

function closePraise() {
  document.getElementById("praisePopup").classList.remove("show");
  document.body.classList.remove("locked");
}

/* 🎊 CONFETTI BURST */
// 🎊 Smooth Fade-Out Confetti
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 140 }, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: Math.random() * 6 + 3,
    dx: (Math.random() - 0.5) * 8,
    dy: (Math.random() - 1.5) * 8,
    color: `hsl(${Math.random() * 360},100%,70%)`
  }));

  let frame = 0;
  let opacity = 1;   // start fully visible

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = opacity;

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.15; // gravity
    });

    frame++;

    // 🎯 start fading after some frames
    if (frame > 40) {
      opacity -= 0.02; // smooth fade speed
    }

    if (opacity > 0) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
    }
  }

  draw();
}

