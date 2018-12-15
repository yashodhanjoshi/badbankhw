var superagent = require('superagent');
app.use(superagent());
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------    

    var name = document.getElementById('createName').value;
    var email = document.getElementById('createEmail').value;
    var password = document.getElementById('createPassword').value;
    var url = '/account/create/' + name + '/' + email + '/' + password;
    var status = document.getElementById('status');
    superagent.get(url).end(function(err, res){
        if(err){
            console.log(err)
        }
        else{
            status.innerHTML = JSON.stringify(res.text)
        }
 });  
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var status = document.getElementById('status');
    var url = '/account/login/' + email + '/' + password;
    superagent.get(url).end(function(err, res){
        if(err){
            console.log(err)
        }
        else{
            status.innerHTML = JSON.stringify(res.text)
        }
 });  
}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    var email = document.getElementById('depositEmail').value;
    var amount = document.getElementById('depositAmount').value;
    var status = document.getElementById('status');
    var url = '/account/deposit/' + email + '/' + amount;
    superagent.get(url).end(function(err, res){
        if(err){
            console.log(err)
        }
        else{
            status.innerHTML = JSON.stringify(res.text)
        }
 });  
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email = document.getElementById('winthdrawalEmail').value;
    var amount = document.getElementById('withdrawalAmount').value;
    var status = document.getElementById('status');
    var url = '/account/withdraw/' + email + '/' + amount;
    superagent.get(url).end(function(err, res){
        if(err){
            console.log(err)
        }
        else{
            status.innerHTML = JSON.stringify(res.text)
        }
 });  
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    var email = document.getElementById('transactionEmail').value;
    var status = document.getElementById('status');
    var url = '/account/transactions/' + email ;
    superagent.get(url).end(function(err, res){
        if(err){
            console.log(err)
        }
        else{
            status.innerHTML = JSON.stringify(res.text)
        }
 });  

}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
    var email  = document.getElementById('balanceEmail').value;
    var url = '/account/balance/' + email;
    var status = document.getElementById('status');
    superagent.get(url).end(function(err, res){
        if(err){
            console.log(err)
        }
        else{
            status.innerHTML = JSON.stringify(res.text)
        }
 });  
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
    
        var url = '/account/all';

    var status = document.getElementById('status');
    
    superagent.get(url).end(function(err, res){
        if(err){
            console.log(err)
        }
        else{console.log(res.body);
            status.innerHTML = JSON.stringify(res.body)
        }
 });  

}

