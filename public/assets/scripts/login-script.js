

document.querySelector('.login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    try {
      const user = {
        email: document.getElementById('email-login').value,
        password: document.getElementById('password-login').value,
      };
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });  

      if (response.ok) { 
        console.log(response.status);
        // setTimeout(() => {
        //   console.log("WAITING");
        //   document.location.replace('/dashboard');
        // },10000)
        document.location.replace('/dashboard');
         }
      else {alert(response.statusText); }
    } 
    catch(err) { console.log(err); }
  });