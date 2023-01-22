const loginInput = document.querySelector('input[name="login"]')
const passwordInput = document.querySelector('input[name="password"]')

const login = 'admin'
const password = 'admin'

const btn = document.querySelector('.btn.btn-red.js-submit')

btn.onclick = function() {
    if (loginInput.value === login && passwordInput.value === password) {
        console.log('accept')
        window.location.href = '../db.html'
    } else {
        console.log('error')
    }
}
