
const about = (()=>{

    const c1 = document.createElement('h2')
    c1.innerText = 'Email: odin@example.com ';


    const c2 = document.createElement('h2')
    c2.innerText = 'Phone: 000-0000-000 ';
    
const mainContent = document.getElementById("content");
mainContent.appendChild(c1);
mainContent.appendChild(c2);

})();

export default about;