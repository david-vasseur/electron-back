export const resetPasswordVanilla = () => {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("error-password");
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("error-confirmPassword");

    const validations = () => {

        const value = password.value;

        if (value.length < 8) {
            return "Le mot de passe doit contenir au moins 8 caractères";
        }
        if (value[0] !== password[0].toUpperCase()) {
            return "Le mot de passe doit commencer par une majuscule";
        }
        if (value.match(/[!+-?*$^%\/@_()#&~]/gm) == null) {
            return 'Le mot de passe doit contenir au moins un caractère spéciale "!" "+" "-" "?" "*" "$" "^" "%" "/" "@" "_" "(" ")" "#" "&" "~"';
        }
        return null;
    }

    password.addEventListener('input', () => {
        const error = validations();
        passwordError.textContent = error || "";
    })
}