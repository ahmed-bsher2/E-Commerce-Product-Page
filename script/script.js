const images = {img_1:"images/image-product-1.jpg", img_2:"images/image-product-2.jpg", img_3:"images/image-product-3.jpg", img_4:"images/image-product-4.jpg"}
const thumnails = ["images/image-product-1-thumbnail.jpg", "images/image-product-2-thumbnail.jpg", "images/image-product-3-thumbnail.jpg", "images/image-product-4-thumbnail.jpg"];

var value = 0;
const price = 250.00;
var discount = 0.5;
var netPrice = ( price *  discount).toFixed(2);
var TotalPrice = 0;
var cartFlag = false;

const mainProduct = document.querySelectorAll(".main"),
      lightBox = document.querySelector(".preview"),
      closeBtn = document.querySelector(".close"),
      thumbnail = document.querySelectorAll(".thumbnail"),
      minBtn = document.querySelector(".min"),
      plusBtn = document.querySelector(".plus"),
      qty = document.querySelector(".val"),
      prevBtn = document.querySelector(".prev"),
      nextBtn = document.querySelector(".netx"),
      cart = document.querySelector(".cart"),
      cartBody = document.querySelector(".cart-body"),
      cartItem = document.querySelector(".cart-item"),
      cartBanner = document.querySelector(".banner"),
      cartDelete = document.querySelector(".delete"),
      cartEmpty = document.querySelector(".empty"),
      priceDesc = document.querySelector(".price-desc"),
      addBtn = document.querySelector(".add");



    mainProduct[0].addEventListener("click", () => {
        ShowLightBox();
    });

    for (i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener("click", function (e) { changeImage(e) })
    }

closeBtn.addEventListener("click", ()=> {
    ShowLightBox()
});

minBtn.addEventListener("click", ()=> {
    chnageqty('sub');
});

plusBtn.addEventListener("click", ()=> {
    chnageqty('add');
});

prevBtn.addEventListener("click", (e)=> {
    slideShow("Prev");
})

prevBtn.addEventListener("click", (e)=> {
    slideShow("Next");
})

cart.addEventListener("click", ()=> {
    if(cartFlag) {
        cartEmpty.style.display = "none"
        cartItem.style.display = "block";
    }
    cartEmpty.style.display = "block"
    cartBody.style.display = "block";
})

document.addEventListener("mouseup", function(e) {
    var cartHide = document.getElementById('cart-body');
    if(e.target.id !== 'cart-body'){
        cartHide .style.display = 'none';
    }
})

addBtn.addEventListener("click", ()=> {
    if(value != 0) {
        cartBanner.innerHTML = value
        cartBanner.style.display = "block";
        cartFlag = true;
        TotalPrice = (netPrice * value).toFixed(2);
        priceDesc.innerHTML = "$" + netPrice + " x " + value + " <b>$" + TotalPrice + "</b>";
    }
    else cartBanner.style.display = "none";
})

cartDelete.addEventListener("click", ()=> {
    value = 0;
    cartBanner.innerHTML = value
    cartBanner.style.display = "none";
    cartFlag = false;
    TotalPrice = 0;
    priceDesc.innerHTML = "";
    cartItem.style.display = "none";
    cartEmpty.style.display = "block"
    // cartItem.innerHTML = "<p class=\"empty\">your cart is empty</p>"
})


function ShowLightBox() {
    var prop = getComputedStyle(lightBox)
    if(prop.getPropertyValue("Display") == "none") {
        lightBox.style.display = "block";
    }
    else {
        lightBox.style.display = "none";
    }
}

function changeImage(a) {
    var property = a.target.classList[1];   // to get index class
    var clas = document.getElementsByClassName(property); // get classes with same index
    for(j = 0; j < thumbnail.length; j++) {
        thumbnail[j].classList.remove("selected"); // remove all 
    }
    
    for (i = 0; i < clas.length; i++) {
        clas[i].classList.add("selected") // insert class with index slected
    }

    mainProduct[0].src = images[property];
    mainProduct[1].src = images[property];
}

function chnageqty(op) {
    if(op == 'add') {
        value++;
    }
    else if(op == 'sub') {
        if(value != 0) {
            value--;
        }
    }
    qty.innerHTML = value;
}

function slideShow(direction) {
    if(direction == "Prev") {
        
    }
    else if(direction == "Next") {

    }
}