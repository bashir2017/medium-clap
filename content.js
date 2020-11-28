//add event listener to the page 
var actualCode =  '(' + function(){

    document.addEventListener('click', (e) => {
        try {
            if(e.target.childNodes[0].getAttribute('aria-label')){
                let svg = e.target.childNodes[0]
                let counter = 1; 
                let timer; 
             
                svg.style.fill="green"
                svg.style.stroke="green"
                
            function triggerMouseEvent (node, eventType) {
                console.log(counter)
                if(counter > 50) clearInterval(timer)
                var clickEvent = document.createEvent ('MouseEvents');
                clickEvent.initEvent (eventType, true, true);
                node.dispatchEvent (clickEvent);
                counter++; 
            }
            //change style of clap svg to green 
            
            // for(let i =0; i < 49; i++){
                timer = setInterval(() => {
                    triggerMouseEvent(svg, 'mousedown')
                    triggerMouseEvent(svg, 'mouseup')
                }, 700)
           
            // }
                
        
            }
        } catch (error) {
            console.log(error)
        }  
        
    })
} + ')();';

    
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

