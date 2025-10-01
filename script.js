// INÍCIO BLOCO: Declaração de variáveis
const form = document.getElementById('signup');
const nick = document.getElementById('nick');
const email = document.getElementById('email');
const password = document.getElementById('password');
const nickError = document.getElementById('nickError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const result = document.getElementById('result');
const toggle = document.getElementById('togglePass');
// FIM BLOCO: Declaração de variáveis

// INÍCIO BLOCO: Toggle de senha
toggle.addEventListener('click', () => {
    const showing = password.type === 'text';
    password.type = showing ? 'password' : 'text';
    toggle.textContent = showing ? 'mostrar' : 'ocultar';
    toggle.setAttribute('aria-pressed', String(!showing));
});
// FIM BLOCO: Toggle de senha

// INÍCIO BLOCO: Função de validação
function validate() {
    let ok = true;
    nickError.textContent = '';
    emailError.textContent = '';
    passError.textContent = '';

    if (!nick.value.trim()) {
        nickError.textContent = 'Informe seu nick.'; ok = false;
    } else if (nick.value.trim().length < 3) {
        nickError.textContent = 'Nick muito curto (mínimo 3 caracteres).'; ok = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'Informe seu email.'; ok = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Email inválido.'; ok = false;
    }

    if (!password.value) {
        passError.textContent = 'Informe uma senha.'; ok = false;
    } else if (password.value.length < 8) {
        passError.textContent = 'Senha muito curta (mínimo 8 caracteres).'; ok = false;
    }

    return ok;
}
// FIM BLOCO: Função de validação

// INÍCIO BLOCO: Listener de submit do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.style.display = 'none';
    if (!validate()) return;

    // Aqui você pode enviar os dados para seu servidor via fetch/axios.
    // Exemplo (comentado):
    // fetch('/register', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({nick:nick.value,email:email.value,password:password.value})})

    // Simulação de sucesso local:
    result.style.display = 'block';
    result.textContent = `Conta criada com sucesso! Bem-vindo(a), ${nick.value.trim()} `;
    form.reset();
    toggle.textContent = 'mostrar';
    toggle.setAttribute('aria-pressed', 'false');
});
// FIM BLOCO: Listener de submit do formulário
