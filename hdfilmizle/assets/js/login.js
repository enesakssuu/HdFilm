var login_btn = document.getElementById("login");
login_btn.onclick = function () {
    window.location.href = "index.html"
    var sifre = document.getElementById("password");
    var ad = document.getElementById("email");
    console.log("Kullanıcı Adı: " + ad.value);
    console.log("Şifre: " + sifre.value);
    alert("Giriş Başarılı!")
}


var KYT = document.getElementById("kyt");
KYT.onclick = function () {

    window.location.href = "index.html"
    var NAME = document.getElementById("name");
    var SURNAME = document.getElementById("surname");
    var MAİL = document.getElementById("mail");
    var TEL = document.getElementById("tel");
    console.log("İsim: " + NAME.value
        // ,
        //     "Soyisim: " + SURNAME.value,
        //     "Mail adresi: " + MAİL.value,
        //     "Telefon Numarası: " + TEL.value
    );
    console.log("Soyisim: " + SURNAME.value);
    console.log("Mail Adresi: " + MAİL.value);
    console.log("Telefon Numarası: " + TEL.value);
    alert("Kayıt İşlemi Başarılı!")
}

