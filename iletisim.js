// ===== Google Maps =====
function initMap() {
  const center = { lat: 41.0082, lng: 28.9784 }; // İstanbul koordinatları

  const map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 12
  });

  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Tour Guide — İstanbul"
  });

  marker.addListener("click", () => {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
}

// callback için gerekli
window.initMap = initMap;

// ===== Form Gönderimi =====
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // sayfanın yenilenmesini önler

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }

  console.log("Form Gönderildi:");
  console.log("Ad:", name);
  console.log("Email:", email);
  console.log("Mesaj:", message);

  alert("Mesajınız gönderildi! Teşekkürler.");
  form.reset();
});
