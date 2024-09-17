const admin= {
    username: "Admin",
    email: "admin@admin.com",
    password: "12345678",
    avatar:
    "https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_man_people_person_profile_user_icon_123377.png",
}

const logIn = (event) =>{
    event.preventDefault();
    let correo = document.getElementById('correo').value;
    let clave = document.getElementById('password').value;

    if(correo = admin.email && clave == admin.password){

        localStorage.setItem('auth',JSON.stringify({
            user:admin.username,
            email:admin.email,
            avatar:admin.avatar
        })
        );
        location.replace("/Pages/Admin.html");
    }else{
        alert('Clave o usuario incorrectos')
    }
}

document.querySelector('form').addEventListener('submit',logIn);

