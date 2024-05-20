export const validateLogin = (email, password) => {
    if (email === '' || password === '') {
        return 'fill in all fields'

    }
}

export const validateSignUp = (email, password, confirmPassword) => {
    return 'not'
}