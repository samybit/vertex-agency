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

    // 5. Dynamic Active Navbar Links
    // Get the name of the current file from the URL (e.g., "about.html")
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Remove the 'active' class from all links
    $('.navbar__menu-link').removeClass('active');

    // Find the link that matches the current page and add 'active'
    $(`.navbar__menu-link[href="${currentPath}"]`).addClass('active');

    // 6. Dynamic Tab Title (Visibility API)
    // Save the original title of the page
    const originalTitle = document.title;

    // Listen for when the user switches tabs
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            // User left the tab
            document.title = "👋 We miss you! - Vertex";
        } else {
            // User came back
            document.title = originalTitle;
        }
    });

    // 7. Auto-Generate Title Based on Page URL
    // Get the filename without the .html extension
    let pageName = window.location.pathname.split('/').pop().split('.')[0];

    // If we aren't on the homepage, update the title
    if (pageName && pageName !== 'index') {
        // Capitalize the first letter (about -> About)
        pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

        // Set the new title
        document.title = `${pageName} | Vertex Agency`;
    }

});