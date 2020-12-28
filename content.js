//add event listener to the page 
var actualCode =  '(' + function(){

    document.addEventListener('click', (e) => {
        try {
            if(e.target.childNodes[0].getAttribute('aria-label')){
                let svg = e.target.childNodes[0]
                let counter = 1; 
                let timer; 

                //change style of clap svg to green 
                svg.style.fill="green"
                svg.style.stroke="green"
                
            function triggerMouseEvent (node, eventType) {
                if(counter > 100) clearInterval(timer)
                var clickEvent = document.createEvent ('MouseEvents');
                clickEvent.initEvent (eventType, true, true);
                node.dispatchEvent (clickEvent);
                counter++; 
            }
            
            
           
               timer = setInterval(() => {
                   triggerMouseEvent(svg, 'mousedown')
                   triggerMouseEvent(svg, 'mouseup')
               }, 200)
           
       
                
        
            }
        } catch (error) {
            //no need to console an error 
        }  
        
    })
} + ')();';

    
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

