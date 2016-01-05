function SubmitForm() {
var firstname = document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;
var message = document.getElementById("message").value;
$.ajax({
    url: "http://104.131.17.187:4004/suggestions",
    type: 'post',
    data: {
        fname: firstname,
        lname: lastname,
        message: message,
        serviceName: "Alain Tavarez"
    },
    success: function(result, text, obj){
        console.log(result)
                
    }
})
}

