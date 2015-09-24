$(function() {
    "use strict";

    /* ==========================================================================
   Sub Form
   ========================================================================== */



    // $('#mc-form').ajaxChimp({
    //     language: 'cm',
    //     url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    // });


    // $.ajaxChimp.translations.cm = {
    //     'submit': 'Submitting...',
    //     0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
    //     1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
    //     2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
    //     3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
    //     4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
    //     5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    // };


    /* ==========================================================================
   Tweet
   ========================================================================== */


    // $('.tweet').twittie({
    //     username: 'envatomarket', // change username here
    //     dateFormat: '%b. %d, %Y',
    //     template: '{{tweet}} {{user_name}}',
    //     count: 10
    // }, function() {
    //     var item = $('.tweet ul');

    //     item.children('li').first().show().siblings().hide();
    //     setInterval(function() {
    //         item.find('li:visible').fadeOut(500, function() {
    //             $(this).appendTo(item);
    //             item.children('li').first().fadeIn(500);
    //         });
    //     }, 5000);
    // });


    /* ==========================================================================
   sticky nav
   ========================================================================== */

    // $('.navbar-default').waypoint('sticky', {
    //     offset: 30
    // });

    /* ==========================================================================
   litebox
   ========================================================================== */

    // $('.litebox-hero, .litebox-tour').magnificPopup({
    //     type: 'iframe'
    // });


    /* ==========================================================================
       Number animation
       ========================================================================== */


    // $('.welcome-message').waypoint(function() {

    //     var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

    //     $('.total-number-1').animateNumber({
    //         number: 50, //change value here
    //         numberStep: comma_separator_number_step
    //     }, 6000);

    // }, {
    //     offset: '80%'

    // });




    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };


        featureImg();


        $(window).on("resize", function() {
            featureImg();
        });


    });




    /* ==========================================================================
   Smooth scroll
   ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({

                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });

    // Scroll for contact us & meet the team

    $(".contact-btn").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#mc-form").offset().top
        }, 500);
    });

    $(".cta-btn").on("click", function() {
        $('html, body').animate({
            scrollTop: $(".team").offset().top
        }, 500);
    });

    $('.smbt-buton').on("click", function(e){
        e.preventDefault();
        var $btn = $(this);
        $btn.text('loading...');
        // clear any errors
        contactForm.clearErrors();
        //do a little client-side validation -- check that each field has a value and e-mail field is in proper format
        var hasErrors = false;
        var $name = $('#name');
        if ($name.val().length === 0){
            hasErrors = true;
            contactForm.addError($name);
        }
        var $email = $('#email');
        if (!contactForm.isValidEmail($email.val())) {
            hasErrors = true;
            contactForm.addError($email);
        }
        var $phone = $('#phone');
        if (!contactForm.isValidPhone($phone.val())) {
            hasErrors = true;
            contactForm.addError($phone);
        }
        var $message = $('#message');
        if ($message.val().length === 0){
            hasErrors = true;
            contactForm.addError($message);
        }
        if (hasErrors){
            $btn.text('Send').append('<i class="fa fa-envelope"></i>');
            return false;
        }
        var request = $.ajax({
            url: "contact_form",
            type: "POST",
            data: $("#mc-form").serialize(),
        });
        request.done(function(response){
            $('.col-sm-11').replaceWith('<h2>' + 'Email sent successfully!' + '</h2>');
            $('.contact-btn').hide()
        });
        request.fail(function(response){
            console.log("failure")
            console.log(response);
        });
    });

    var contactForm = {
        isValidEmail: function(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        },

        isValidPhone: function(phone) {
            phone = phone.replace(/[^0-9]/g, '');
            return (phone.length > 3);
        },
        clearErrors: function() {
            $('#emailAlert').remove();
            $('#mc-form .help-block').hide();
            $('#mc-form .form-group').removeClass('has-error');
        },
        addError: function($input) {
            $input.siblings('.help-block').show();
            $input.parent('.form-group').addClass('has-error');
        },
    };
});


