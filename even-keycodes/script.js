//  Get key code from key press event. 

const insert = document.getElementById('insert');

window.addEventListener('keydown', (event)=>{
    
    insert.innerHTML =`
    <div class="key">
    ${event.key === " " ? 'Space': event.key}
    <small>event.key</small>
</div>
<div class="key">
    ${event.keyCode}
    <small>even.keycode</small>
</div>
<div class="key">
    ${event.code}
    <small>enve.code</small>
</div>
    `
})