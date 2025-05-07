async function login(email,password) {

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      return  {success:true, token:data.token};
     } else {
       return  {success:false,message:data.message};
        }
  }




  module.exports = { login};