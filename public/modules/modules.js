var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">Bad Bank</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#" onclick="defaultModule()">BadBank<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
            <a class="nav-item nav-link" href="#" onclick="loadLogin()">Login</a>
            <a class="nav-item nav-link" href="#" onclick="loadDeposit()">Deposit</a>
            <a class="nav-item nav-link" href="#" onclick="loadWithdraw()">Withdraw Amount</a>
            <a class="nav-item nav-link" href="#" onclick="loadTransactions()">Transactions</a>
            <a class="nav-item nav-link" href="#" onclick="loadBalance()">Balance</a>
            <a class="nav-item nav-link" href="#" onclick="loadAllData()">All Data</a>
    </div>
  </div>
</nav>
`;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            <p>
                <h6 class="card-title">Name</h6>
                <input type="input" class="form-control" id="createName" placeholder="Enter your name">
            </p>
            <p>
            <h6 class="card-title">Email Address</h6>
            <input type="input" class="form-control" id="createEmail" placeholder="Enter your email">
            </p>
            <p>
            <h6 class="card-title">Password</h6>
            <input type="password" class="form-control" id="createPassword" placeholder="Enter password">
            </p>
            <button type="button" class="btn btn-light" onclick= "create()">Create Account</button>
            <div id="status"></div>
        </div>
    </div>
 `;

ui.login = `
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
<div class="card-header">Login</div>
<div class="card-body">
    <p>
    <h6 class="card-title">Email Address</h6>
    <input type="input" class="form-control" id="loginEmail" placeholder="Enter your email">
    </p>
    <p>
    <h6 class="card-title">Password</h6>
    <input type="password" class="form-control" id="loginPassword" placeholder="Enter password">
    </p>
    <button type="button" class="btn btn-light" onclick= "login()">Login</button>
    <div id="status"></div>
</div>
</div>
`;

ui.deposit = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
<div class="card-header">Deposit</div>
<div class="card-body"><p>
<h6 class="card-title">Email Address</h6>
<input type="input" class="form-control" id="depositEmail" placeholder="Enter your email">
</p>
<p>
<h6 class="card-title">Deposit Amount</h6>
<input type="number" class="form-control" id="depositAmount" placeholder="Enter Deposit Amount">
</p>
<button type="button" class="btn btn-light" onclick= "deposit()">Deposit</button>
<div id="status"></div>
</div>
</div>

`;

ui.withdraw = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Withdraw Amount</div>
<div class="card-body"><p>
<h6 class="card-title">Email Address</h6>
<input type="input" class="form-control" id="winthdrawalEmail" placeholder="Enter your email">
</p>
<p>
<h6 class="card-title">Withdraw Amount</h6>
<input type="number" class="form-control" id="withdrawalAmount" placeholder="Enter Withdrawal Amount">
</p>
<button type="button" class="btn btn-light" onclick= "withdraw()">Withdraw</button>
<div id="status"></div>
</div>
</div>
`;

ui.transactions = `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
<div class="card-header">Transactions</div>
<div class="card-body">
<p>
<h6 class="card-title">Email Address</h6>
<input type="input" class="form-control" id="transactionEmail" placeholder="Enter your email">
</p>
<button type="button" class="btn btn-light" onclick= "transactions()">Transactions</button>
<div id="status"></div>
</div>
</div> 
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<div class="card-header">Balance</div>
<div class="card-body">
<p>
<h6 class="card-title">Email Address</h6>
<input type="input" class="form-control" id="balanceEmail" placeholder="Enter your email">
</p>
<button type="button" class="btn btn-light" onclick= "balance()">Balance</button>
<div id="status"></div>
</div>
</div>
`;

ui.default = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
<div class="card-header">BadBank</div>
<div class="card-body">
<h5 class="card-title">Welcome to the bank</h5>
  <p class="card-text">Navigate through the options you need
        <div>
                <img src="bank.png" height="240">
        </div>
</div>
`;

ui.allData = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h6 class="card-title">All Data In Store</h6>
    <button type="button" class="btn btn-dark" onclick="allData()">All Data</button>
  </div>
  <div id="status"></div>
</div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
