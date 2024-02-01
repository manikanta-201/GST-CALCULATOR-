//  navbar

let toggle = document.querySelector(".toggle")
let menu = document.querySelector(".menu")


toggle.onclick = function () {
    menu.classList.toggle("active")
}









// gst section





function butnsub() {

    let out=document.querySelector('#outputbox').style.display="flex";
    let username = document.getElementById("uname").value;
    let useremail = document.getElementById("email").value;
    let usermobileno = document.getElementById('mobileno').value;
    let place = document.getElementById('place').value;
    let vegBiryani = document.getElementById('veg-Biryani').value;
    let nonvegBiryani = document.getElementById('Non-veg-Biryani').value;
    let mandhi = document.getElementById('mandhi').value;
    let whiteRice = document.getElementById('white-Rice').value;
    let entergst = document.getElementById('gst').value;


    let menuitem = [parseInt(vegBiryani), parseInt(nonvegBiryani), parseInt(mandhi), parseInt(whiteRice), parseInt(gst)];
    let sum = 0;
    for (let i = 0; i < menuitem.length - 1; i++) {
        sum = sum + menuitem[i];
    }

    let gstpercentage = entergst;
    entergst = (sum * entergst) / 100;
    let gsttotal = entergst + sum;
    const tip = 100;
    let totalamount = tip + gsttotal;


    // ouput values
    document.getElementById("result").innerHTML = "</br>" + "person details" + "<br>" +
        "Name:&nbsp" + username + "<br>" +
        "Emaile :&nbsp" + useremail + "<br>" +
        "Mobile No :&nbsp" + usermobileno + "<br>" +
        "Place :&nbsp" + place + "<br> <br>" +
        "Menu<br><br>" +


        "Total Amount:" + sum + "<br>" +
        "GST persentage &nbsp " + gstpercentage + "%" + "&nbsp" +
        "GST Amount :" + entergst + "<br>" +
        "Total : " + gsttotal + "<br>" +
        "tip  amount is : " + tip + "<br>" + "<h5 style 'color:black'> total Amount with Tip : </h5>" + totalamount;

}

























