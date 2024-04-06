let host = "https://diner-pancakehouse-merge-latest-vppk.onrender.com";
    
async function signUp() {
  let u = document.getElementById("user").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("psw").value;

  let customer = {username : u, password : p, email : e};

  let request = {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(customer)
  };

  let response = await fetch(host + "/signup", request);

  if (response.status == 200) {
      message = "All good"
      alert(message);
      window.location.href = "login.html";
  } 
  else {
      console.log(response);
      message = "Something went wrong! Customer data could not be saved.";
      alert(message);
  }
  console.log(message);
  alert(message);
}

function navigateBack() {
    window.location.href = "login.html";
}