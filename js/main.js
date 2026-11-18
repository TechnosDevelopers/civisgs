/* =========================================================
   CIVIS - Interatividade
   1. Menu mobile (hambúrguer)
   2. Validação do formulário de contato
   3. Acordeão (FAQ)
   4. Abas
   5. Filtro de recompensas
   6. Calculadora de Eco-Pontos
   7. Modal
   8. Filtro de ecopontos
   Cada módulo só roda se os elementos existirem na página.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    iniciarMenuMobile();
    iniciarFormularioContato();
    iniciarAcordeao();
    iniciarAbas();
    iniciarFiltroRecompensas();
    iniciarCalculadora();
    iniciarModal();
    iniciarFiltroEcopontos();
});

/* ---------- 1. Menu mobile ---------- */
function iniciarMenuMobile() {
    var botao = document.querySelector(".nav-toggle");
    var menu = document.getElementById("menu-principal");
    if (!botao || !menu) return;

    function alternarMenu(abrir) {
        menu.classList.toggle("is-open", abrir);
        botao.setAttribute("aria-expanded", String(abrir));
        botao.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
    }

    botao.addEventListener("click", function () {
        var estaAberto = botao.getAttribute("aria-expanded") === "true";
        alternarMenu(!estaAberto);
    });

    // Fecha ao clicar em um link
    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { alternarMenu(false); });
    });

    // Fecha com ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") alternarMenu(false);
    });

    // Se a tela crescer para desktop, garante estado limpo
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 900) alternarMenu(false);
    });
}

/* ---------- 2. Validação do formulário de contato ---------- */
function iniciarFormularioContato() {
    var form = document.getElementById("form-contato");
    if (!form) return;

    var feedback = document.getElementById("form-feedback");
    var campos = ["nome", "email", "assunto", "mensagem"];

    var regras = {
        nome: function (v) {
            if (!v.trim()) return "Informe seu nome.";
            if (v.trim().length < 3) return "O nome deve ter pelo menos 3 caracteres.";
            return "";
        },
        email: function (v) {
            if (!v.trim()) return "Informe seu e-mail.";
            var padrao = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!padrao.test(v.trim())) return "Informe um e-mail válido (ex.: nome@dominio.com).";
            return "";
        },
        assunto: function (v) {
            if (!v) return "Selecione um assunto.";
            return "";
        },
        mensagem: function (v) {
            if (!v.trim()) return "Escreva sua mensagem.";
            if (v.trim().length < 10) return "A mensagem deve ter pelo menos 10 caracteres.";
            return "";
        }
    };

    function validarCampo(id) {
        var campo = document.getElementById(id);
        var erro = document.getElementById("erro-" + id);
        var mensagem = regras[id](campo.value);

        erro.textContent = mensagem;
        campo.classList.toggle("is-invalid", mensagem !== "");
        campo.classList.toggle("is-valid", mensagem === "");
        campo.setAttribute("aria-invalid", String(mensagem !== ""));
        return mensagem === "";
    }

    function mostrarFeedback(tipo, texto) {
        feedback.hidden = false;
        feedback.textContent = texto;
        feedback.className = "form__feedback form__feedback--" + tipo;
    }

    // Validação em tempo real ao sair do campo
    campos.forEach(function (id) {
        var campo = document.getElementById(id);
        campo.addEventListener("blur", function () { validarCampo(id); });
        campo.addEventListener("input", function () {
            if (campo.classList.contains("is-invalid")) validarCampo(id);
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var todosValidos = true;
        var primeiroInvalido = null;

        campos.forEach(function (id) {
            var ok = validarCampo(id);
            if (!ok && !primeiroInvalido) primeiroInvalido = id;
            todosValidos = todosValidos && ok;
        });

        if (!todosValidos) {
            mostrarFeedback("erro", "Revise os campos destacados antes de enviar.");
            document.getElementById(primeiroInvalido).focus();
            return;
        }

        mostrarFeedback("ok", "Mensagem enviada com sucesso! Retornaremos em breve.");
        form.reset();
        campos.forEach(function (id) {
            document.getElementById(id).classList.remove("is-valid");
        });
    });
}

/* ---------- 3. Acordeão ---------- */
function iniciarAcordeao() {
    var gatilhos = document.querySelectorAll(".accordion__trigger");
    if (!gatilhos.length) return;

    gatilhos.forEach(function (gatilho) {
        gatilho.addEventListener("click", function () {
            var painel = document.getElementById(gatilho.getAttribute("aria-controls"));
            var abrir = gatilho.getAttribute("aria-expanded") !== "true";

            // Mantém apenas um item aberto por vez
            gatilhos.forEach(function (outro) {
                outro.setAttribute("aria-expanded", "false");
                document.getElementById(outro.getAttribute("aria-controls")).hidden = true;
            });

            gatilho.setAttribute("aria-expanded", String(abrir));
            painel.hidden = !abrir;
        });
    });
}

/* ---------- 4. Abas ---------- */
function iniciarAbas() {
    var botoes = document.querySelectorAll(".tabs__btn");
    if (!botoes.length) return;

    function ativar(botao) {
        botoes.forEach(function (b) {
            var selecionado = b === botao;
            b.setAttribute("aria-selected", String(selecionado));
            b.tabIndex = selecionado ? 0 : -1;
            document.getElementById(b.getAttribute("aria-controls")).hidden = !selecionado;
        });
    }

    botoes.forEach(function (botao, i) {
        botao.addEventListener("click", function () { ativar(botao); });

        // Navegação por setas do teclado
        botao.addEventListener("keydown", function (e) {
            var destino = null;
            if (e.key === "ArrowRight") destino = botoes[(i + 1) % botoes.length];
            if (e.key === "ArrowLeft") destino = botoes[(i - 1 + botoes.length) % botoes.length];
            if (destino) { destino.focus(); ativar(destino); }
        });
    });
}

/* ---------- 5. Filtro de recompensas ---------- */
function iniciarFiltroRecompensas() {
    var botoes = document.querySelectorAll(".filter-btn[data-filtro]");
    var itens = document.querySelectorAll(".reward");
    var contador = document.getElementById("contador-recompensas");
    if (!botoes.length || !itens.length) return;

    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            var filtro = botao.getAttribute("data-filtro");
            var visiveis = 0;

            botoes.forEach(function (b) { b.setAttribute("aria-pressed", String(b === botao)); });

            itens.forEach(function (item) {
                var mostrar = filtro === "todos" || item.getAttribute("data-categoria") === filtro;
                item.hidden = !mostrar;
                if (mostrar) visiveis++;
            });

            if (contador) {
                contador.textContent = visiveis + (visiveis === 1 ? " benefício encontrado" : " benefícios encontrados");
            }
        });
    });
}

/* ---------- 6. Calculadora de Eco-Pontos ---------- */
function iniciarCalculadora() {
    var form = document.getElementById("calc-form");
    if (!form) return;

    // Pontos por kg (valores ilustrativos do protótipo)
    var pontosPorKg = { papel: 8, plastico: 10, vidro: 6, metal: 12, eletronico: 40, organico: 5 };

    var saida = document.getElementById("calc-pontos");
    var equivalencia = document.getElementById("calc-equivalencia");

    function calcular() {
        var total = 0;
        Object.keys(pontosPorKg).forEach(function (tipo) {
            var campo = document.getElementById("kg-" + tipo);
            var kg = parseFloat(campo.value);
            if (!isNaN(kg) && kg > 0) total += kg * pontosPorKg[tipo];
        });

        total = Math.round(total);
        saida.textContent = total;

        if (total >= 500) {
            equivalencia.textContent = "Já dá para resgatar um ingresso de cinema!";
        } else if (total >= 150) {
            equivalencia.textContent = "Já dá para trocar por cashback ou desconto em livraria.";
        } else if (total > 0) {
            equivalencia.textContent = "Continue acumulando: faltam " + (150 - total) + " pontos para o primeiro benefício.";
        } else {
            equivalencia.textContent = "Informe as quantidades para simular seus pontos.";
        }
    }

    form.addEventListener("input", calcular);
    form.addEventListener("reset", function () {
        setTimeout(calcular, 0);
    });
    form.addEventListener("submit", function (e) { e.preventDefault(); calcular(); });
}

/* ---------- 7. Modal ---------- */
function iniciarModal() {
    var gatilhos = document.querySelectorAll("[data-abrir-modal]");
    if (!gatilhos.length) return;

    var ultimoFoco = null;

    function abrir(modal, origem) {
        ultimoFoco = origem;
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        var fechar = modal.querySelector(".modal__close");
        if (fechar) fechar.focus();
    }

    function fechar(modal) {
        modal.hidden = true;
        document.body.style.overflow = "";
        if (ultimoFoco) ultimoFoco.focus();
    }

    gatilhos.forEach(function (gatilho) {
        var modal = document.getElementById(gatilho.getAttribute("data-abrir-modal"));
        if (!modal) return;

        gatilho.addEventListener("click", function () { abrir(modal, gatilho); });

        modal.addEventListener("click", function (e) {
            if (e.target === modal || e.target.closest("[data-fechar-modal]")) fechar(modal);
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !modal.hidden) fechar(modal);
        });
    });
}

/* ---------- 8. Filtro de ecopontos ---------- */
function iniciarFiltroEcopontos() {
    var campo = document.getElementById("busca-ecoponto");
    var itens = document.querySelectorAll(".eco");
    var vazio = document.getElementById("eco-vazio");
    if (!campo || !itens.length) return;

    campo.addEventListener("input", function () {
        var termo = campo.value.trim().toLowerCase();
        var visiveis = 0;

        itens.forEach(function (item) {
            var combina = item.textContent.toLowerCase().indexOf(termo) !== -1;
            item.hidden = !combina;
            if (combina) visiveis++;
        });

        if (vazio) vazio.hidden = visiveis !== 0;
    });
}
