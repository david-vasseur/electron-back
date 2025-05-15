export const resetPasswordVanilla = () => {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("error-password");
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("error-confirmPassword");
    const button = document.getElementById("validate-button");

    const validations = () => {

        const value = password.value;
        let errorMessages = [];

        if (value[0] !== value[0].toUpperCase()) {
            errorMessages.push("Le mot de passe doit commencer par une majuscule");
        }
        if (value.length < 8) {
            errorMessages.push("Le mot de passe doit contenir au moins 8 caractères");
        }
        if (value.length > 20) {
            errorMessages.push("Le mot de passe ne doit pas contenir plus de 20 caractères");
        }
        if (value.match(/^\S*$/) == null) {
            errorMessages.push("Le mot de passe ne doit pas contenir d'espaces");
        }
        if (value.match(/[!+-?*$^%\/@_()#&~]/) == null) {
            errorMessages.push('Le mot de passe doit contenir un caractère spéciale: ! + - ? * $ ^ % / @ _ ( ) # & ~');
        }

        return errorMessages;
    }

    const samePassword = () => {

        let errorMessage = null;

        if (password.value !== confirmPassword.value) {
            errorMessage = "Les deux mots de passe doivent être identiques"
        }

        return errorMessage;
    }

    const updateButtonState = () => {
        const validationErrors = validations();
        const confirmPasswordErrorMessage = samePassword();

        if (validationErrors.length > 0 || confirmPasswordErrorMessage) {
            button.disabled = true;
            button.classList.add('disabled');
        } else {
            button.disabled = false;
            button.classList.remove('disabled');
        }

        passwordError.textContent = validationErrors.length > 0 ? validationErrors[0] : '';
        confirmPasswordError.textContent = confirmPasswordErrorMessage || '';
    }

    password.addEventListener('input', updateButtonState);
    confirmPassword.addEventListener('input', updateButtonState);

    window.addEventListener('pageshow', (e) => {
        if (e.persisted || window.performance && performance.getEntriesByType("navigation")[0]?.type === "back_forward") {
            window.location.reload();
        }
    })
};