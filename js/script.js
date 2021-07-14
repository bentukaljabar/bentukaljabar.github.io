    window.onmessage = function(e) {

        var payload = JSON.parse(e.data);
        localStorage.setItem(payload.key, payload.data);
        localStorage.setItem(payload.key1, payload.data1);
   
        console.log(payload);
    };

setTimeout(function(e){ 
        var payload = JSON.parse(e.data);
        localStorage.setItem(payload.key, payload.data);
        localStorage.setItem(payload.key1, payload.data1);
   
        console.log(payload);
}, 3000);
