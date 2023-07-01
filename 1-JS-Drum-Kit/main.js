
    function playSound (e){
        console.log(e);
        
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; //stop the function from runing all together 
        audio.currentTime = 0 ; // rewid to the start 
        audio.play();
        
        // key.classList.remove('playing') key.classList.toggle('playing')
        
        key.classList.add('playing');// jquer key.addClass('playing')
        
        /* setTimeout(() => {
            key.classList.remove('playing')
        },100) */
    }
    function removeTransition (e) {
        console.log(">>TRANSITION",e);
        if(e.propertyName !== 'transform') return; // skip it if its not transform
        e.target.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',removeTransition))

    window.addEventListener('keydown',playSound);