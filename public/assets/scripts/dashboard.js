document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        hoverEnabled: false
    });
});

// Execute plan creation
$('#plan-newSubmit').on('click', async function (plan) {    
    try {
        const plan = {
            title: document.getElementById('plan-title').value,
            events_id: document.getElementsByClassName('plans-add')[0].getAttribute('data-event-id')
        }

        const response = await fetch('/api/plans', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(plan)
        });
    
        if (response.ok) {
            location.reload();
        } else {
            M.toast({ html: response.statusText });
        }
    } catch (err) {
        console.log(err);
    }
});