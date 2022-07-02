class Telefono{
    constructor(Marca){
        this.Marca = Marca
    }
    get Marca(){
        return this._Marca;
    }
    set Marca(Marca){
        this._Marca = Marca
    }
}

let Iphone = new Telefono("Nokia");

//Iphone.Marca = 'Iphone';
console.log(Iphone.Marca);
Iphone.Marca = 'Iphone';
console.log(Iphone.Marca)