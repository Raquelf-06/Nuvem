function openModal(element) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = element.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
