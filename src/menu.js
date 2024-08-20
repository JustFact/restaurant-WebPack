
const menu = (()=>{

    const m1 = document.createElement('a')
    m1.innerText = 'Noodles ';
    m1.href = '#'

    const m2 = document.createElement('a')
    m2.innerText = 'Burger ';
    m2.href = '#'
    
    const m3 = document.createElement('a')
    m3.innerText = 'Pizza';
    m3.href = '#'
    
const mainContent = document.getElementById("content");
mainContent.appendChild(m1);
mainContent.appendChild(m2);
mainContent.appendChild(m3);

})();

export default menu;