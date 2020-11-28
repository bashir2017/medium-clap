//add event listener to the page 
var actualCode =  '(' + function(){

    document.addEventListener('click', (e) => {
        try {
            if(e.target.childNodes[0].getAttribute('aria-label')){
                let avg = e.target.childNodes[0]
                
            function triggerMouseEvent (node, eventType) {
                var clickEvent = document.createEvent ('MouseEvents');
                clickEvent.initEvent (eventType, true, true);
                node.dispatchEvent (clickEvent);
            }
            
            for(let i =0; i < 49; i++){
                console.log(i)
                triggerMouseEvent(avg, 'mousedown')
                triggerMouseEvent(avg, 'mouseup')
             
            }
                
        
            }
        } catch (error) {
            console.log('error happened')
        }  
        
    })
} + ')();';

    
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

