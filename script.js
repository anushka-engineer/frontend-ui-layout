document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });

    
    document.getElementById("nav").classList.remove("show");
  });
});

document.getElementById("ctaBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message");

  if (name === "" || email === "") {
    msg.textContent = "Please fill all fields";
    msg.style.color = "red";
  } else if (!email.includes("@")) {
    msg.textContent = "Enter a valid email";
    msg.style.color = "orange";
  } else {
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";

    document.getElementById("form").reset();
  }
});

document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", function () {
    const text = this.textContent;
    alert(text + " - Project details coming soon!");
  });
});

