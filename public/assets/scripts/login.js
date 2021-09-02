// Execute login for current user
$('#login-submit').on('click', async function (event) {
    event.preventDefault();
    try {
        const user = {
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        };
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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

// Execute signup for current user
$('#signup-submit').on('click', async function (event) {
    event.preventDefault();
    try {
        const user = {
            email: document.getElementById('signup-email').value,
            password: document.getElementById('signup-password').value
        };
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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

// $('#reset-submit').on('click', async function (event) {
//     event.preventDefault();
//     try {
//         const user = {
//             email: document.getElementById('reset-email').value
//         };
//         await fetch('/api/users/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         });
//         document.location.replace('/dashboard');
//     } catch (err) {
//         console.log(err);
//     }
// });

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
        if(xhr.responseText == 'success'){
            signOut();
            location.assign('/dashboard')
        }
    };
    xhr.send(JSON.stringify({token : id_token}));
  }