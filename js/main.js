window.onload = function(){

    var url = "http://192.168.1.200/python/test.php";
    var gpioCode = '17';

    new Vue({
        el: "#app",
        methods: {
            on: function(){
                alert("Encendiendo");
                axios.post(url,'gpio=' + gpioCode + '&status=on')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })

                /*
                axios.post(url,{
                    gpio: gpioCode,
                    status: "on"
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
                */
            },
    
            off: function(){
                alert("Apagando");
                axios.post(url,'gpio=' + gpioCode + '&status=off')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })

                /*
                axios.post(url,{
                    gpio: gpioCode,
                    status: "off"
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
                */
            }
        },
    })

}
