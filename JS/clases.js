
class Producto {
    constructor(nombre,categoria,img,stock,precio,codigo,marca,descrip){
        this.nombre = nombre;
        this.categoria = categoria;
        this.img = img;
        this.stock = stock;
        this.precio = precio;
        this.codigo = codigo;
        this.marca = marca;
        this.descrip = descrip;
    }
}

class User{
    constructor(userName,userEmail,userPass){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPass = userPass;
    }
}

export {Producto,User}