
function login()
{
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname =='')
    {
        alert("Please enter username!");
    }
    else if(pwd=='')
    {
        alert("Please enter the password!");
    }
    else if(!filter.test(uname))
    {
        alert("Please enter valid email id!");
    }
    else if(pwd.length < 8 || pwd.length > 8)
    {
        alert("Password should be 8 characters!");
    }
    else
    {
alert('Thank You for Login & You are Redirecting to INTERNSHALA Website');
//Redirecting to other page or webste code or you can set your own html page.
   window.location = "https://internshala.com/";
        }
}
//Reset Inputfield code.
function clearFunc()
{
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}	