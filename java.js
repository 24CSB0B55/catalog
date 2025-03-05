function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  window.onclick = function(event) {
    const modal = document.getElementById('subscribeModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  function displayDate(){
    document.getElementById("demo").innerHTML=Date();
  }