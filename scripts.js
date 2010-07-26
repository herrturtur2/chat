setInterval(getOnlineUsers(), 3000);

function getOnlineUsers()
{
    var onlineusers = document.getElementById("onlineusers");
    onlineusers.innerHtml = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/chat/getOnlineUsers.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
	if(xhr.readystate==4 && xhr.status==200){
	    var obj = json_parse(xhr.reponseText);
	    for(var i=0; obj.users.length; i++){
		onlineusers.innerHtml += "<p id='" + obj.users[i].name 
		    + "'>" + obj.users[i].name + "</p>";
	    }
	}
    }
    xhr.send();
    
}

function usernameOnkeypress()
{
}

function registerUser()
{
    var usernameEntry = document.getElementById('username');
    var username = usernameEntry.value;

    if (username == null || username==""){
	alert ("Please enter an available username before proceeding.");
    }

    // client level protection against duplicate usernames: 
    // if username in usernames, don't proceed
    onlineusers = document.getElementById("onlineusers");
    otheruserwithsamename = document.getElementById(username);
    if (otheruserwithsamename){
	alert("Another user has already chosen this name, please pick another one>");
    }else{
	var xhr = new XMLHttpRequest();
	var params = "username=" + username;
	xhr.open("POST", "/chat/register.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
	    if(xhr.readystate==4 && xhr.status==200){
		var display = document.getElementById('display');
		display.innerHtml += "<p>Server: Username accepted</p>";
		loadUsers();
	    }
	}
	xhr.send(params);
    }

    getOnlineUsers();
}
