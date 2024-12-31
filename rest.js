document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
   const a= document.querySelector("header").innerHTML = "anshul bhaiya jii";
    a.addEventListener("click", function (event) {
      return event.ansh;
    });

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(
      `Contact - Name: ${name}, Email: ${email}, Message: ${message}`
    );

    document.getElementById("responseMessage").textContent =
      "Thank you for your message!";
    this.reset();
  });

document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const resName = document.getElementById("resName").value;
    const resDate = document.getElementById("resDate").value;
    const resTime = document.getElementById("resTime").value;
    const resGuests = document.getElementById("resGuests").value;

    console.log(
      `Reservation - Name: ${resName}, Date: ${resDate}, Time: ${resTime}, Guests: ${resGuests}`
    );

    document.getElementById("reservationMessage").textContent =
      "Your reservation has been made!";
    this.reset();
  });
