var d= document
var creatAccount = d.getElementById("creatAccount")
var loginForm = d.getElementById("login")

creatAccount.style.display="none"


function showCreateAccountForm() {
  
    loginForm.style.display="none"
    creatAccount.style.display="block"
}
function showLoging() {
    loginForm.style.display="block"
    creatAccount.style.display="none"
}
