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
    
    const elements = [m1,m2,m3]

    return {elements}
})();

export default menu.elements