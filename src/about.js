
const about = (()=>{

    const c1 = document.createElement('h2')
    c1.innerText = 'Email: odin@example.com ';


    const c2 = document.createElement('h2')
    c2.innerText = 'Phone: 000-0000-000 ';
    
    const elements = [c1,c2];

    return {elements}
})();

export default about.elements;