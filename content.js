//add event listener to the page 
var actualCode =  '(' + function(){

    document.addEventListener('click', (e) => {
        try {
            if(e.target.childNodes[0].getAttribute('aria-label')){
                let svg = e.target.childNodes[0]
             
                svg.style.fill="green"
                svg.style.stroke="green"
                
            function triggerMouseEvent (node, eventType) {
                var clickEvent = document.createEvent ('MouseEvents');
                clickEvent.initEvent (eventType, true, true);
                node.dispatchEvent (clickEvent);
            }
            //change style of clap svg to green 

            for(let i =0; i < 49; i++){
                console.log(i)
                triggerMouseEvent(svg, 'mousedown')
                triggerMouseEvent(svg, 'mouseup')
                triggerMouseEvent(svg, 'click')
            }
                
        
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

