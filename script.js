/*
    =========================================
    VALIDAÇÃO DO FORMULÁRIO
    =========================================
*/

const formulario =
    document.getElementById("formContato");


formulario.addEventListener(
    "submit",
    function(event) {

        // Impede o envio real do formulário
        event.preventDefault();


        // Campos
        const nome =
            document.getElementById("nome");

        const email =
            document.getElementById("email");

        const mensagem =
            document.getElementById("mensagem");


        // Mensagens de erro
        const erroNome =
            document.getElementById("erroNome");

        const erroEmail =
            document.getElementById("erroEmail");

        const erroMensagem =
            document.getElementById("erroMensagem");


        const mensagemSucesso =
            document.getElementById(
                "mensagemSucesso"
            );


        // Limpa mensagens antigas
        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroMensagem.textContent = "";

        mensagemSucesso.style.display =
            "none";


        let formularioValido = true;


        /*
            Validação do nome
        */

        if (nome.value.trim() === "") {

            erroNome.textContent =
                "Por favor, informe seu nome.";

            formularioValido = false;
        }


        /*
            Validação do e-mail
        */

        if (email.value.trim() === "") {

            erroEmail.textContent =
                "Por favor, informe seu e-mail.";

            formularioValido = false;

        } else if (
            !validarEmail(email.value)
        ) {

            erroEmail.textContent =
                "Digite um e-mail válido.";

            formularioValido = false;
        }


        /*
            Validação da mensagem
        */

        if (
            mensagem.value.trim() === ""
        ) {

            erroMensagem.textContent =
                "Por favor, escreva uma mensagem.";

            formularioValido = false;
        }


        /*
            Caso todos os campos estejam
            corretos, o envio é simulado.
        */

        if (formularioValido) {

            mensagemSucesso.textContent =
                "Mensagem enviada com sucesso!";

            mensagemSucesso.style.display =
                "block";

            formulario.reset();
        }

    }
);


/*
    Função para verificar
    o formato do e-mail
*/

function validarEmail(email) {

    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return formatoEmail.test(email);
}


/*
    =========================================
    ANIMAÇÃO AO ROLAR A PÁGINA
    =========================================
*/

const elementos =
    document.querySelectorAll(".reveal");


function mostrarElementos() {

    const alturaJanela =
        window.innerHeight;

    elementos.forEach(
        function(elemento) {

            const distanciaTopo =
                elemento.getBoundingClientRect()
                    .top;

            if (
                distanciaTopo <
                alturaJanela - 80
            ) {

                elemento.classList.add(
                    "ativo"
                );

            }

        }
    );

}


/*
    Executa ao carregar a página
*/

mostrarElementos();


/*
    Executa sempre que o usuário
    rolar a página
*/

window.addEventListener(
    "scroll",
    mostrarElementos
);