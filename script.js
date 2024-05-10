$('#emailSubmit').click(function () {
    const input = ($('#emailInput').val()).toString() ? ($('#emailInput').val()).toString() : false;
    if (displayError(input)) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
            localStorage.setItem('email', input);
            $('.loaderDiv').css('opacity', 1);
            setTimeout(()=>{
                $('.loaderDiv').css('opacity', 0);
                window.location.href = "success.html";
            }, 1000);
        } else {
            displayError(false);
        }
    }
});

function displayError(err) {
    if (!err) {
        $('.errorLabel').css('opacity', 1);
        $('#emailInput').css({
            "border-color": $(':root').css('--error-input-border'),
            "background-color": $(':root').css('--error-input-bg'),
            "color": $(':root').css('--error-input-color')
        });
        return false;
    } else {
        if ($('.errorLabel').css('opacity') == 1) {
            $('.errorLabel').css('opacity', 0);
            $('#emailInput').css({
                "border-color": $(':root').css('--normal-input-border'),
                "background-color": $(':root').css('--normal-input-bg'),
                "color": $(':root').css('--normal-input-color')
            });
        }
        return true;
    }
}