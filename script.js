// ================= NAVBAR =================
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#hamburger-menu");

// klik di luar elemen
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// pilih-bunga.html
const bungaCards = document.querySelectorAll(".bunga-card");
const popup = document.getElementById("popup");
const popupMainTitle = document.getElementById("popup-main-title");
const popupItems = document.getElementById("popup-items");
const closePopup = document.getElementById("close-popup");

// ===========================
// KLIK KARTU BUNGA → TAMPIL POPUP
// ===========================
bungaCards.forEach((card) => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";

    const nama = card.dataset.nama;
    const submenu = JSON.parse(card.dataset.submenu);

    popupMainTitle.textContent = nama;
    popupItems.innerHTML = "";

    submenu.forEach((item) => {
      popupItems.innerHTML += `
        <div class="popup-item">
          <img src="${item.img}" width="80">
          <h3>${item.nama}</h3>
          <p>${item.harga}</p>
          <p>${item.makna}</p>
        </div>
      `;
    });

    // PENTING: render ulang feather setelah innerHTML
    feather.replace();
  });

  // CLOSE POPUP
  document.getElementById("close-popup").onclick = () => {
    document.getElementById("popup").style.display = "none";
  };

  // klik area gelap
  window.onclick = (e) => {
    if (e.target === popup) popup.style.display = "none";
  };
});

function goToPage(page) {
  window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".btn-back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (history.length > 1) {
        history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }
});
