$(() => {
    $("#addLeadIcon").click(function (event) {
        event.preventDefault();
    });

    $('#newLeadForm').submit(function (e) {
        // Stop the form submitting
        e.preventDefault();

        var form = $(this);
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
        }).done(function (data) {
            form.trigger("reset");
            window.location.replace('/pages-leads');
        }).fail(function (data) {
            console.log(data);
            alert("Error creating lead");
        });
    });
});
