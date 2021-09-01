$('#login-submit').on('click', async function (event) {
    event.preventDefault();
    try {
        const user = {
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        };
        await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            M.toast({html: 'Failed Login'})
        }
    } catch (err) {
        console.log(err);
    }
});

$('#signup-submit').on('click', async function (event) {
    event.preventDefault();
    try {
        const user = {
            email: document.getElementById('signup-email').value,
            password: document.getElementById('signup-password').value
        };
        await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        document.location.replace('/dashboard');
    } catch (err) {
        console.log(err);
    }
});

$('#reset-submit').on('click', async function (event) {
    event.preventDefault();
    try {
        const user = {
            email: document.getElementById('reset-email').value
        };
        await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        document.location.replace('/dashboard');
    } catch (err) {
        console.log(err);
    }
});