const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_yiqaxon'
const templateId = 'template_0kvd74k'
const apikey = 'O8xdb2-EwLUHyskPS'

function sendEmail(event) {
  event.preventDefault()
  emailjs.init(serviceId)

  emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
  .then ( result => Swal.fire('Su mensaje se ha enviado con éxito.')  )
  .catch( error => Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  }))
}

aa