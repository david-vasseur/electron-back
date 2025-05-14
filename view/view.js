export const resetPasswordVanilla = () => {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("error-password");
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("error-confirmPassword");

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
        return errorMessages.length > 0 ? errorMessages[0] : null;
    }

    const samePassword = () => {

        let errorMessage = null;

        if (password.value !== confirmPassword.value) {
            errorMessage = "Les deux mots de passe doivent être identiques"
        }

        return errorMessage !== null ? errorMessage : "";
    }

    password.addEventListener('input', () => {
        const error = validations();
        passwordError.textContent = error || "";
    })

    confirmPassword.addEventListener('input', () => {
        const error = samePassword();
        confirmPasswordError.textContent = error || "";
    })
}