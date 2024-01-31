/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        if (email.match(/[a-zA-Z0-9_]+@[a-z.]*northeastern.edu$/g)) {
            let user = email.split("@")[0];
            let hidden_user = user.replace(/./g, "*");
            const listItem = document.createElement("li");
            listItem.textContent = hidden_user + "@" + email.split("@")[1];
            list.appendChild(listItem);
            
        }
    }
}