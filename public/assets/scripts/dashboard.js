document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        hoverEnabled: false
    });
});

// Delete an event
$('.event-delete').click(async function (event) {
    if ($(event.target).is('a') === true || $(event.target).parent().is('a') === true) {
        const event_id = event.target.id || event.target.parentNode.id;

        if (event_id !== '') {
            try {       
                const response = await fetch(`/api/events/${event_id.split('-').slice(1).join('-')}`, {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                });
            
                if (response.ok) {
                    location.reload();
                } else {
                    M.toast({ html: response.statusText });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
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

// Delete a plan
$('.plan-delete').click(async function (event) {
    if ($(event.target).is('a') === true || $(event.target).parent().is('a') === true) {
        const plan_id = event.target.id || event.target.parentNode.id;

        if (plan_id !== '') {
            try {       
                const response = await fetch(`/api/plans/${plan_id.split('-').slice(1).join('-')}`, {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                });
            
                if (response.ok) {
                    location.reload();
                } else {
                    M.toast({ html: response.statusText });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
});

// Execute todo creation
$('#todo-newSubmit').on('click', async function (plan) {    
    try {
        const todo = {
            title: document.getElementById('todo-title').value,
            description: document.getElementById('todo-description').value,
            due_date: document.getElementById('todo-due').value,
            status: $('#todo-status').find('.selected')[0].innerText,
            plans_id: document.getElementsByClassName('todos-add')[0].getAttribute('data-plan-id')
        }

        const response = await fetch('/api/todos', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
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

$('.plan-header').click(async function(event) {
    if ($(event.target).is("div") === true || $(event.target).parent().is("div") === true) {
        const plan_id = event.target.getAttribute('data-plan-id') || event.target.parentNode.getAttribute('data-plan-id');
        const response = await fetch(`/api/todos/plans/${plan_id}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            const todosData = await response.json();

            $('.todo').text('');
            for (let i = 0; i < todosData.length; i++) {                
                let $elLi = $('<li>');

                let $elDiv = $('<div>');
                $elDiv.addClass('collapsible-header transparent todo-header');

                let $elIChevron = $('<i>');
                $elIChevron.addClass('material-icons todo-chevron');
                $elIChevron.text('chevron_right');

                let $elAEdit = $('<a>');
                $elAEdit.addClass('btn-floating btn-small todo-edit grey');
                $elAEdit.attr('id', `todoEdit-${todosData[i].id}`);

                let $elAEditIChevron = $('<i>');
                $elAEditIChevron.addClass('material-icons');
                $elAEditIChevron.text('edit');

                let $elADelete = $('<a>');
                $elADelete.addClass('btn-floating btn-small todo-delete grey');
                $elADelete.attr('id', `todoDelete-${todosData[i].id}`);

                let $elADeleteIChevron = $('<i>');
                $elADeleteIChevron.addClass('material-icons');
                $elADeleteIChevron.text('delete');

                $elDiv.append($elIChevron);
                $elDiv.append(todosData[i].title);
                
                $elAEdit.append($elAEditIChevron);
                $elDiv.append($elAEdit);

                $elADelete.append($elADeleteIChevron);
                $elDiv.append($elADelete);

                let $elDivBody = $('<div>');
                $elDivBody.addClass('collapsible-body');

                let $elH6 = $('<h6>');
                $elH6.text('Todo Details');

                let $elBodyP = $('<p>');
                $elBodyP.text(todosData[i].description);

                $elDivBody.append($elH6);
                $elDivBody.append($elBodyP);

                if (todosData[i].due_date !== null) {
                    let $elBodyPDue = $('<p>');
                    $elBodyPDue.text(`Due Date: ${todosData[i].due_date}`);
                    $elDivBody.append($elBodyPDue);
                }

                if (todosData[i].status !== null) {
                    let $elBodyPStat = $('<p>');
                    $elBodyPStat.text(`Status: ${todosData[i].status}`);
                    $elDivBody.append($elBodyPStat);
                }

                $elLi.append($elDiv);
                $elLi.append($elDivBody);
                $(`#todos-${todosData[i].plans_id}`).append($elLi);

            }

            for (let todo of todosData) {
                let $elLi = $('<li>');

                let $elDiv = $('<div>');
                $elDiv.addClass('collapsible-header transparent plan-header');

                let $elIChevron = $('<i>');
                $elIChevron.addClass('material-icons plan-chevron');
                $elIChevron.text('chevron_right');

                $elDiv.append($elIChevron);
                $elLi.append($elDiv);
                $(`todos-${todo.plans_id}`).append($elLi);
            }
        } else {
            M.toast({ html: response.statusText });
        }

        }
    }
);

// Delete a todo
$('.todo-delete').click(async function (event) {
    if ($(event.target).is('a') === true || $(event.target).parent().is('a') === true) {
        const todo_id = event.target.id || event.target.parentNode.id;
        console.log(todo_id);
        if (todo_id !== '') {
            try {       
                const response = await fetch(`/api/todos/${todo_id.split('-').slice(1).join('-')}`, {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                });
            
                if (response.ok) {
                    location.reload();
                } else {
                    M.toast({ html: response.statusText });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
});