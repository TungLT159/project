const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const form = document.querySelector('form')

const showError = (input, message) => {
    let parent = input.parentElement
    let small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

const showSuccess = (input) => {
    let parent = input.parentElement
    let small = parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

const checkEmptyError = (listInput) => {
    listInput.forEach(input => {
        let isEmptyError = false
        input.value = input.value.trim()
        if (!input.value) {
            isEmptyError = true
            showError(input, 'is required')
        } else {
            showSuccess(input)
        }
        return isEmptyError
    })
}

const checkEmail = (input) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isEmailError = !regexEmail.test(input.value)
    input.value = input.value.trim()

    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email Invalid')
    }
    return isEmailError
}

const checkLengthError = (input, min, max) => {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `Đặt ít nhất ${min} ký tự`)
        return true
    }
    if (input.value.length > max) {
        showError(input, `Không được đặt quá ${max} ký tự`)
        return true
    }
    showSuccess(input)
    return false
}

const checkPassword = (passwordInput, cfpasswordInput) => {
    if (passwordInput.value !== cfpasswordInput.value) {
        showError(cfpasswordInput, 'Mật khẩu không trùng khớp!')
        return true
    }
    return false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let isEmptyError = checkEmptyError([userName, email, password, confirmPassword])
    let isEmailError = checkEmail(email)
    let isUserNameLengthError = checkLengthError(userName, 6, 12)
    let isPasswordLengthError = checkLengthError(password, 8, 15)
    let isCheckPassword = checkPassword(password, confirmPassword)
})