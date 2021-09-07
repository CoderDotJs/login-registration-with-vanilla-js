const call = (user, pass, userValue) =>{

    if(user == userValue[0].toLowerCase() && pass == userValue[1].toString()){
        console.log('logged in')
        location.href = 'doc/dashboard.html';
    }
    else{
        alert('not found sign up')
        // console.log(`user input: ${user}, local user ${userValue[0]}, user pass: ${pass}, local pass: ${userValue[1]}`)
    }
    return;
}

const login = (username, password) =>{
    const user = document.querySelector(`#${username}`).value;
    const pass = document.querySelector(`#${password}`).value.toString();

    const localUser = localStorage.getItem(user.toLowerCase());

    try {
        if(!localUser){
            alert('not found')
            console.log('not found !localUser')
        }
        else{
            const userParsed = JSON.parse(localUser);
            const userKeys = Object.keys(userParsed)
            const userValue = Object.values(userParsed)

            if(localUser){
                call(user, pass, userValue)
            }
            else{
                alert('User not found')
            }
        }
    } catch (error) {
        console.alert('Local User Not found')
    }
}

const signup = (signUser, signPass1, signPass2) => {
    const user = document.querySelector(`#${signUser}`).value;
    const pass1 = document.querySelector(`#${signPass1}`).value;
    const pass2 = document.querySelector(`#${signPass2}`).value;
    let newObj = {}
    
    try {
        if(pass1 !== pass2){
            alert('Password didnt match')
            console.log(pass1, pass2)
        }
        else{
            newObj.name = user;
            newObj.password = pass1;
            const objStringify = JSON.stringify(newObj)
            localStorage.setItem(`${user}`, objStringify);
            alert('Now please login')
        }
    } catch (error) {
        console.log(error)
    }

}
document.querySelector('#sign-up').addEventListener('click', () =>{
    signup('sign-user', 'sign-pass1', 'sign-pass2')
})
document.querySelector('#loginBtn').addEventListener('click', () =>{
    login('login-user', 'login-pass')
})