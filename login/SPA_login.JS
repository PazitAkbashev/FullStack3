
let regg = document.getElementById("su");
regg.addEventListener('submit',addUser);

let list=localStorage.getItem('listUsers');

list=JSON.parse(list);
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const regLink = document.getElementById('reg');
const logLink = document.getElementById('log');
form1.style.display = 'none';

function addUser(e)
{
    e.preventDefault();


let newUser=document.getElementById('newusername').value;
let pass=document.getElementById('newpassword').value;
let newpass=document.getElementById('npassword').value;


for(let i=0;i<list.length;i++)
{
    if(list[i].name===newUser)
    {
        window.alert("Existing username Enter new username!");
        return;
    }
}
if(pass!=newpass) {
    alert("The authentication password is incorrect");
}
let user={
    name:document.getElementById('newusername').value,
    password:document.getElementById('newpassword').value,
};


list.push(user);

localStorage.setItem('listUsers',JSON.stringify(list));

}
regLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    form1.style.display = 'none'; // Hide form1
    form2.style.display = 'block'; // Show form2
});

// Add click event listener to the login link
logLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    form2.style.display = 'none'; // Hide form2
    form1.style.display = 'block'; // Show form1
});





const sub =document.getElementById("submit");
sub.addEventListener("submit", login);
function login(event){
    event.preventDefault();

    let nam = document.getElementById('username').value
    let pass = document.getElementById('password').value
    let list=localStorage.getItem('listUsers')
    list=JSON.parse(list)

    for(let i=0;i<list.length;i++)
         if ( list[i].name === nam && list[i].password ===pass)
            {
                localStorage.setItem("cur_user",JSON.stringify(list[i])) ;
                window.alert("You've logged in successfully");
                return;   
        }
        window.alert(" תחילה עליך להרשם למערכת !");
    }

