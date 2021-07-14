    window.onmessage = function(e) {

        var payload = JSON.parse(e.data);
        localStorage.setItem(payload.key, payload.data);
        localStorage.setItem(payload.key1, payload.data1);
        localStorage.setItem(payload.key2, payload.data2);
   
        console.log(payload);
    };
