const slide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.toolbar_selection');
    console.log(burger);
    burger.addEventListener('click',()=>{
        nav.classList.toggle('toolbar_selection-active');
    })
}

slide();