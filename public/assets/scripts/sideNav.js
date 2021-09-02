$(document).ready(function () {
    $(".messageJavascript").remove();
    
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.datepicker').datepicker();
    $('select').formSelect();
});

// Execute event creation
$('#event-newSubmit').on('click', async function (event) {    
    try {
        const event = {
            title: document.getElementById('event-title').value,
            description: document.getElementById('event-description').value,
            type: $('#event-type').find('.selected')[0].innerText,
            category: $('#event-category').find('.selected')[0].innerText,
            start_date: document.getElementById('event-start').value,
            end_date: document.getElementById('event-end').value,
            location: document.getElementById('event-location').value,
            url: document.getElementById('event-url').value
        }

        console.log(event);

        const response = await fetch('/api/events', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            M.toast({ html: response.statusText });
        }
    } catch (err) {
        console.log(err);
    }
});
