const serviceId = 'service_opsjbum';
const templateId = 'template_s7celeq';
const publicKey = 'R1bH0AhVVOfpQtQL7';

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const userData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phonenum: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        };
        sendEmailfromEmailJS(userData);
    });

export const sendEmailfromEmailJS = (userData) => {
    const form = document.getElementById("contact-form");
    const formStatus = form.querySelector(".status");
    const data = {
        name: userData.name,
        email: userData.email,
        phonenum: userData.phonenum,
        message: userData.message
    };


    emailjs
        .send(serviceId, templateId, {
            name: data.name,
            email: data.email,
            phonenum: data.phonenum,
            message: data.message,
        }, publicKey)
        .then(
            () => {
                console.log('SUCCESS!');
                formStatus.classList.remove("d-none");
                formStatus.classList.remove("alert-danger");
                formStatus.classList.add("alert-success");
                formStatus.textContent = 'Submitted Successfully! We will get back to you soon.';
            },
            (error) => {
                console.log('FAILED...', error.text);
                formStatus.classList.remove("d-none");
                formStatus.classList.remove("alert-success");
                formStatus.classList.add("alert-danger");
                formStatus.textContent = "Oops! An error occurred and your message could not be sent.";
            },
        );
};
