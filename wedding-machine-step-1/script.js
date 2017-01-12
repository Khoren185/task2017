var favDrink = prompt("What's your favorite drink\r\n1.Coca-Cola\r\n2.Sprite\r\n3.Mirinda");
switch(favDrink) {
        case "1":
        text = "You chouse is Coca-Cola and his value are 300AMD";
        break;
        case "2":
        text= "You chouse is Sprite and his value are 300AMD";
        break;
        case "3":
        text ="You chouse is Mirinda and his value are 300AMD";
        default:
        text = "Sorry we don't have this number of drinks";
}
alert(text);