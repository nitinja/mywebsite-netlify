/* contact form validation */

let emailField, messageField;

function validateEmail(email) {
  /* simple email regex*/
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

/* contact form validation */
const validateContactForm = () => {
  const email = emailField.value;
  const message = messageField.value ? messageField.value.trim() : "";
  const isContactFormValid = validateEmail(email) && message.length;
  document.getElementById("submitContactButton").disabled = !isContactFormValid;
};

/* add validation on page load */
export const initFormValidation = () => {
  emailField = document.getElementsByName("email")[0];
  messageField = document.getElementsByName("message")[0];
  emailField.addEventListener("input", event => {
    validateContactForm();
  });
  messageField.addEventListener("input", event => {
    validateContactForm();
  });
};
