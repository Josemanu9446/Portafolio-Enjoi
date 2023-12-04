const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'contact_service'
const templateId = 'contact_form'
const apikey = 'O8xdb2-EwLUHyskPS'

function sendEmail(event) {
  event.preventDefault()
  emailjs.init(serviceId)

  emailjs.sendForm(serviceId, templateId, frmEmail, apikey, this)
  .then ( result => Swal.fire('Su mensaje se ha enviado con éxito.')  )
  .catch( error => Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  }))
}

// Funcion de desplazar hacia arriba 
const desplazarArriba = document.querySelector("#ir-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
