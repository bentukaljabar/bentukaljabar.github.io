    window.onmessage = function(e) {

        var payload = JSON.parse(e.data);
        localStorage.setItem(payload.key, payload.data);
   
        console.log("ok");
    };
