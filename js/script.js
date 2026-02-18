// script.js para CV de Cristofer Ricardo Henríquez Henríquez

$(document).ready(function () {

    // 1) Scroll suave en los enlaces del navbar
    $('.nav-link').click(function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            const destino = this.hash;
            const posicion = $(destino).offset().top - 70; // compensar la navbar

            $('html, body').stop().animate(
                { scrollTop: posicion },
                800,
                'swing'
            );
        }
    });

    // 2) Modo oscuro / claro
    $('#btn-theme').click(function () {
        $('body').toggleClass('dark-mode');

        if ($('body').hasClass('dark-mode')) {
            // Modo oscuro
            $(this)
                .html('<i class="bi bi-sun-fill"></i> Claro')
                .removeClass('btn-outline-dark')
                .addClass('btn-outline-light');

            // Navbar y tarjetas más oscuras
            $('.navbar')
                .removeClass('navbar-light bg-light')
                .addClass('navbar-dark bg-dark');

            $('.card').addClass('bg-dark text-white border-secondary');
        } else {
            // Modo claro
            $(this)
                .html('<i class="bi bi-moon-stars-fill"></i> Oscuro')
                .removeClass('btn-outline-light')
                .addClass('btn-outline-dark');

            $('.navbar')
                .removeClass('navbar-dark bg-dark')
                .addClass('navbar-light bg-light');

            $('.card').removeClass('bg-dark text-white border-secondary');
        }
    });

    // 3) Validación simple del formulario de contacto
    $('#nombre').on('input', function () {
        const valor = $(this).val().trim();
        if (valor.length > 0) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    $('#email').on('input', function () {
        const valor = $(this).val().trim();
        if (valor.length > 4 && valor.includes('@')) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    $('#mensaje').on('input', function () {
        const valor = $(this).val().trim();
        if (valor.length > 5) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    // 4) Manejo del envío del formulario
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#mensaje').val().trim();

        if (
            $('.is-invalid').length > 0 ||
            nombre === "" ||
            email === "" ||
            mensaje === ""
        ) {
            alert("⚠️ Por favor, corrige los errores en el formulario antes de enviar.");
        } else {
            alert("✅ ¡Gracias " + nombre + "! Tu mensaje ha sido enviado correctamente.");
            this.reset();
            $(this).find('.form-control').removeClass('is-valid is-invalid');
        }
    });

    // 5) Efecto hover en tarjetas de experiencia
    $('.interactive-card').hover(
        function () {
            $(this).addClass('card-highlight');
        },
        function () {
            $(this).removeClass('card-highlight');
        }
    );

});
