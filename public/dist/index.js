$("#login-submit").on("click",async function(a){a.preventDefault();try{const a={email:document.getElementById("login-email").value,password:document.getElementById("login-password").value},b=await fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});b.ok?document.location.replace("/dashboard"):M.toast({html:b.statusText})}catch(a){console.log(a)}}),$("#signup-submit").on("click",async function(a){a.preventDefault();try{const a={email:document.getElementById("signup-email").value,password:document.getElementById("signup-password").value},b=await fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});b.ok?document.location.replace("/dashboard"):M.toast({html:b.statusText})}catch(a){console.log(a)}});