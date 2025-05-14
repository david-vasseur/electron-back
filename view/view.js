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
        if (value.match(/[!+-?*$^%\/@_()#&~]/gm) == null) {
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

    if (performanceNavigation.type === performanceNavigation.TYPE_BACK_FORWARD) {
        window.location.reload();
    }

    password.addEventListener('input', updateButtonState)
    confirmPassword.addEventListener('input', updateButtonState)
};