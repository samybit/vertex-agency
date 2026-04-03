$(function () {

    // 1. Initial Page Load Animation
    // The CSS class .fade-in has display:none, this brings it to life
    $('.fade-in').fadeIn(800);

    // 2. Mobile Hamburger Menu Toggle
    $('.navbar__toggle').on('click', function () {
        $('.navbar__menu').slideToggle(300);
    });

    // 3. Services Accordion Logic
    $('.accordion__header').on('click', function () {
        const $this = $(this);
        const $body = $this.next('.accordion__body');

        // Close all other open accordion bodies
        $('.accordion__body').not($body).slideUp(300);

        // Remove 'active' class from all other headers
        $('.accordion__header').not($this).removeClass('active');

        // Toggle the clicked one
        $body.slideToggle(300);
        $this.toggleClass('active');
    });

    // 4. Contact Form Validation
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Reset all error states first
        $('.form__group').removeClass('error');

        // Validate Name
        if ($('#name').val().trim() === '') {
            $('#name').closest('.form__group').addClass('error');
            isValid = false;
        }

        // Validate Email (Basic check for @ symbol)
        const emailVal = $('#email').val().trim();
        if (emailVal === '' || !emailVal.includes('@')) {
            $('#email').closest('.form__group').addClass('error');
            isValid = false;
        }

        // Validate Message
        if ($('#message').val().trim() === '') {
            $('#message').closest('.form__group').addClass('error');
            isValid = false;
        }

        // If everything is valid, submit!
        if (isValid) {
            // Hide the form fields and button
            $('.form__group, .btn').slideUp(300);

            // Show the success message
            $('.form__success').fadeIn(500);

            // AJAX call //
        }
    });

});