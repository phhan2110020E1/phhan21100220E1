function kiemtra(){
    //email
    var sEmail = document.getElementById("email").value;
    if(sEmail.length == 0){
        alert("The Email can not left empty!");
        document.getElementById("email").focus();
        return false;
    }
      var reEmail = /^\w+[@]\w+[.]\w{3}([.]\w{2})?$/;//alphabet from 6 to 12 characters
      if(!reEmail.test(sEmail)){
      alert("The Email is invalid!\n(The Email field must be matched email format xxxx@xxx.xxx or xxxx@xxx.xxx.xx)");
      document.getElementById("email").focus();
      return false;
    }
}
function goToURL() {
  location.href = 'BOOKING.html';

}