console.log("working");
class BankAccount {
    static getUserDetails() {
        var AccData = {
            1003: { name: "Ryan Phillip", age: 21, accNo: 1003, password: "1234", address: "Poovathingal(H)", balance: 18000, email: "ryanphillip003@gmail.com", Pin: 3333 },
            1004: { name: "Shine Joy", age: 20, accNo: 1004, password: "4321", address: "ittanhottil(H)", balance: 16000, email: "shinejoy20@gmail.com", Pin: 4444 },
            1005: { name: "Shinu Joy", age: 25, accNo: 1005, password: "3214", address: "Pulikkal(H)", balance: 12000, email: "shinujoy25@gmail.com", Pin: 5555 }
        }

        return AccData;
    }
    static login() {
        var accNo = document.getElementById("loginInputAccNo").value;
        var accPass = document.getElementById("loginInputAccpassword").value;

        var data = BankAccount.getUserDetails();
        if (accNo in data) {
            let realPWD = data[accNo].password;
            if (accPass == realPWD) {
                localStorage.setItem('accountNo', accNo);
                alert("Welcome to Big bank!");
                window.location = "Userdetails.html";
            }
            else {
                alert("Incorrect password");
            }
        }
        else {
            alert("Sorry! This Account Does Not Exist");
        }

    }
    static deposit() {
        var accNo = localStorage.getItem('accountNo');
        var AMT = Number(document.getElementById("AMT").value);
        let Pin = document.getElementById("Pin").value;

        let data = BankAccount.getUserDetails();
        let PinR = data[accNo].Pin;

        if (Pin == PinR) {
            // var temp = localStorage.getItem('Depsitmoney');
            var depsave = localStorage.setItem('Depsitmoney',AMT);
            if (AMT >= 1000) {
                alert("Successfully deposited " + AMT);
                data[accNo].balance += localStorage.getItem('Depsitmoney');
                console.log(data[accNo].balance);
                window.location = "Userdetails.html";
            }
            else {
                alert("Minimum deposit amount is 1000");
            }
        }
        else {
            alert("Wrong Pin");
        }
    }
     static withdraw(){
        var accNo = localStorage.getItem('accountNo');
         var AMT2 = Number(document.getElementById("AMT").value);
        let Pin = document.getElementById("Pin").value;
        localStorage.setItem('withmoney',0);

        let data = BankAccount.getUserDetails();
        let PinR = data[accNo].Pin;
        if(Pin ==PinR){
            var withsave =localStorage.setItem('withmoney',AMT2);
            if(AMT2 >= 1000){
                alert("Successfully Withdraw" + AMT2);   
                localStorage.setItem('Depsitmoney',localStorage.getItem("Depsitmoney")- AMT2);
                window.location ="Userdetails.html"
            }
            else{
                alert("Minimum Withdraw amount is 1000");
            }
        }
        else{
            alert("Wrong Pin");
        }
        }

    static loggedUser(){
    let data = BankAccount.getUserDetails();
    var accNo = localStorage.getItem('accountNo');
    // var  change = document.getElementById('accHolderName');
    var userName = document.getElementById('userName');
    var userAddress = document.getElementById('userAdderss');
    var userEmail = document.getElementById('userEmail');
    var Agee = document.getElementById('userAge').innerHTML = data[accNo].age;
    var userBalance = document.getElementById('userBalance');
    var useraccNo = document.getElementById('accountNo');
    //change.innerHTML = data[accNo].name;
    userName.innerHTML = data[accNo].name;
    userAddress.innerHTML = data[accNo].address;
    userBalance.innerHTML = data[accNo].balance + Number(localStorage.getItem("Depsitmoney"));
    userEmail.innerHTML = data[accNo].email;
    useraccNo.innerHTML = accNo;

}

static logout(){
    window.location = "index.html";
    localStorage.clear();
    console.log("clicked")
}


static submit(){

    var userBalance = document.getAnimations.getElementById('userBalance');
    userBalance.innerHTML = data[accNo].balance;
}
}
