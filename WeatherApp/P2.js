window.addEventListener('load',()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos =>{
            console.log(pos);
            long = pos.coords.longitude;
            lat = pos.coords.latitude;
            
            const api = "";

            fetch(api)
            .then(res => {
                console.log(res);   
                return res.json;
            })
            .then(data =>{
               console.log(data);
    
            });
            
        });

        
    }

    



});