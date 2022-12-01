const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const tabPanes = $$('.tab-pane') 

console.log(tabs)

tabs.forEach((tab,index) => {
    
    tab.addEventListener('click',function()
    {
        $$('.active').forEach(item=>{
            item.classList.remove('active')
        })
        tabPanes[index].classList.add('active')
        this.classList.add('active')
    }) 
});
