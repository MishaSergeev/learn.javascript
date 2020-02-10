function User (name) {
    this.name = none;
}
User.prototype.hello = function (who){
    console.log("Hello, "+who.name);
};
var misha = new User("Misha");
var alina = new User("Alina");
misha.hello(alina);