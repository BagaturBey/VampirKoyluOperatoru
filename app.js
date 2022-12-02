// Yazı temizleme fonksiyonu ismindende anlaşılacağı üzere ul kısmımızda bulunan elimizle girdiğimiz isimleri ve karakterleri random dağıttıktan sonra silmeye yarayan kısımdır.
// Bu fonksiyon henüz tamamlanmamıştır (Çok zor bir durum olmadığı için yakın zamanda kodlayacağım)
function yaziTemizleme() {
    const yaziTemizlemeButon = document.querySelector('#silme-butonu');
    yaziTemizlemeButon.addEventListener('submit',yaziTemzile);
        function yaziTemzile(e) {
        e.preventDefault();
        const divId = document.querySelector("#div-id");
        divId.remove();
        console.log("Yazı Temzileme İşlemi Yapıldı");
    }
}

// Oyuncuların isimlerinin ekleneceği input alanını ve eklemede kullandığımız butonları seçtiğimiz kod bloğu.
const isimEkleForm = document.querySelector('#isim-form');
const isimImput = document.querySelector('#isim');
isimEkleForm.addEventListener('submit',isimEkleFunk);
const isimUl = document.querySelector('#oyuncu-liste');
const isimDizi = [];


// Oyuncu isimlerinin eklenmesinde asıl etken olan fonksiyon kısmı.
function isimEkleFunk(e){
    e.preventDefault();
    const isimYeniLi = document.createElement('td');
    isimYeniLi.textContent = isimImput.value;
    const bosluk = document.createElement("br");
    isimUl.appendChild(isimYeniLi);
    isimUl.appendChild(bosluk);
    isimDizi.push(isimYeniLi.textContent); 
    isimImput.value = '';
    yaziTemizleme();
    console.log(isimDizi);
    console.log("İsim Girildi");
}

// Oyuncuların karakterlenini ekleneceği input alanını ve eklemede kullandığımız butonları seçtiğimiz kod bloğu.
const karakterEkleForm = document.querySelector('#karakter-form');
const karakterInput = document.querySelector('#karakter');
karakterEkleForm.addEventListener('submit',karakterEkleFunk);
const karakterUl = document.querySelector('#karakter-liste');
const karakterDizi = [];

// Oyuncu karakterlerinin eklenmesinde asıl etken olan fonksiyon kısmı.
function karakterEkleFunk(e){
    e.preventDefault();
    const karakterYeniLi = document.createElement('td');
    karakterYeniLi.textContent = karakterInput.value;
    const bosluk = document.createElement("br");
    karakterUl.appendChild(karakterYeniLi);
    karakterUl.appendChild(bosluk);
    karakterDizi.push(karakterYeniLi.textContent);
    karakterInput.value = '';
    yaziTemizleme();
    console.log(karakterDizi);
    console.log("Karakter Girildi");
}

//Random butonunun çalışma bloğu ve fonkisyonları
const rolDagitma = document.querySelector('#rol-dagitici');
rolDagitma.addEventListener('submit',rolDagitmaButon);
const rastgeleIsimUl = document.querySelector('#rastgele-isimler');

function rolDagitmaButon(e) {
    e.preventDefault();
    let randomIsimDizi = isimDizi.sort(function (a,b) {
        return 0.5 - Math.random()
    });
    
    let randomKarakterDizi = karakterDizi.sort(function (a,b){
        return 0.5 - Math.random()
    });
   
    // Roller için emoji eklenmesini sağlayan kısım
    for(i = 0; i < randomKarakterDizi.length; i++){ 
        if(randomKarakterDizi[i] === "Vampir"){
            randomKarakterDizi[i] = "Vampir🧛";
        }else if (randomKarakterDizi[i] === "VAMPİR"){
            randomKarakterDizi[i] = "Vampir🧛";
        }else if (randomKarakterDizi[i] === "vampir"){
            randomKarakterDizi[i] = "Vampir🧛";
        }

        if(randomKarakterDizi[i] === "Doktor"){
            randomKarakterDizi[i] = "Doktor👨‍⚕️";
        }else if (randomKarakterDizi[i] === "doktor"){
            randomKarakterDizi[i] = "Doktor👨‍⚕️";
        }else if (randomKarakterDizi[i] === "DOKTOR"){
            randomKarakterDizi[i] = "Doktor👨‍⚕️";
        }
    
        if(randomKarakterDizi[i] === "Köylü"){
            randomKarakterDizi[i] = "Köylü👨‍🌾";
        }else if(randomKarakterDizi[i] === "KÖYLÜ"){
            randomKarakterDizi[i] = "Köylü👨‍🌾";
        }else if(randomKarakterDizi[i] === "köylü"){
            randomKarakterDizi[i] = "Köylü👨‍🌾";
        }else if(randomKarakterDizi[i] === "KOYLU"){
            randomKarakterDizi[i] = "Köylü👨‍🌾";
        }else if(randomKarakterDizi[i] === "koylu"){
            randomKarakterDizi[i] = "Köylü👨‍🌾";
        }else if(randomKarakterDizi[i] === "Koylu"){
            randomKarakterDizi[i] = "Köylü👨‍🌾";
        }

        if(randomKarakterDizi[i] === "Avcı"){
            randomKarakterDizi[i] = "Avcı🏹";
        }else if(randomKarakterDizi[i] === "AVCI"){
            randomKarakterDizi[i] = "Avcı🏹";
        }else if(randomKarakterDizi[i] === "avcı"){
            randomKarakterDizi[i] = "Avcı🏹";
        }

        if(randomKarakterDizi[i] === "KurtAdam"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }else if(randomKarakterDizi[i] === "KURTADAM"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }else if(randomKarakterDizi[i] === "kurtadam"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }else if(randomKarakterDizi[i] === "KURT ADAM"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }else if(randomKarakterDizi[i] === "kurt adam"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }else if(randomKarakterDizi[i] === "Kurt Adam"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }else if(randomKarakterDizi[i] === "kurt Adam"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }else if(randomKarakterDizi[i] === "kurt"){
            randomKarakterDizi[i] = "KurtAdam🐺";
        }

        if(randomKarakterDizi[i] === "Hokkabaz"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "hokkabaz"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "HOKKABAZ"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "Deli"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "DELİ"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "deli"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "jester"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "Jester"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }else if(randomKarakterDizi[i] === "JESTER"){
            randomKarakterDizi[i] = "Jester🤹‍♂️";
        }

        if(randomKarakterDizi[i] === "Muhtar"){
            randomKarakterDizi[i] = "Muhtar🤠";
        }else if(randomKarakterDizi[i] === "muhtar"){
            randomKarakterDizi[i] = "Muhtar🤠";
        }else if(randomKarakterDizi[i] === "MUHTAR"){
            randomKarakterDizi[i] = "Muhtar🤠";
        }else if(randomKarakterDizi[i] === "Mayor"){
            randomKarakterDizi[i] = "Muhtar🤠";
        }else if(randomKarakterDizi[i] === "MAYOR"){
            randomKarakterDizi[i] = "Muhtar🤠";
        }else if(randomKarakterDizi[i] === "mayor"){
            randomKarakterDizi[i] = "Muhtar🤠";
        }

        if(randomKarakterDizi[i] === "Bodyguard"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "bodyguard"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "BODYGUARD"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "Kalkan"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "KALKAN"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "kalkan"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "KalkanlıAdam"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "KALKANLIADAM"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }else if(randomKarakterDizi[i] === "kalkanlıadam"){
            randomKarakterDizi[i] = "Bodyguard🛡️";
        }

        if(randomKarakterDizi[i] === "Escort"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "escort"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "ESCORT"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "Orospu"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "OROSPU"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "orospu"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "Şıllık"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "ŞILLIK"){
            randomKarakterDizi[i] = "Escort💋";
        }else if(randomKarakterDizi[i] === "şıllık"){
            randomKarakterDizi[i] = "Escort💋";
        }

        if(randomKarakterDizi[i] === "Transporter"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "transporter"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "TRANSPORTER"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "Işınlayıcı"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "IŞINLAYICI"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "ışınlayıcı"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "YERDEĞİŞTİRİCİ"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "Yerdeğiştirici"){
            randomKarakterDizi[i] = "Transporter🌀";
        }else if(randomKarakterDizi[i] === "yerdeğiştirici"){
            randomKarakterDizi[i] = "Transporter🌀";
        }

        if(randomKarakterDizi[i] === "Tracker"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "tracker"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "TRACKER"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "İzci"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "İZCİ"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "izci"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "İzsürücü"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "İZSÜRÜCÜ"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }else if(randomKarakterDizi[i] === "izsürücü"){
            randomKarakterDizi[i] = "Tracker🕵️";
        }

        if(randomKarakterDizi[i] === "Vigilante"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "vigilante"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "VİGİLANTE"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "Tekkurşun"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "TEKKURŞUN"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "tekkurşun"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "kurşun"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "KURŞUN"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }else if(randomKarakterDizi[i] === "Kurşun"){
            randomKarakterDizi[i] = "Vigilante🔫";
        }

        if(randomKarakterDizi[i] === "Büyücü"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "büyücü"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "BÜYÜCÜ"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "Wizard"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "wizard"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "WİZARD"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "Magician"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "magician"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }else if(randomKarakterDizi[i] === "MAGİCİAN"){
            randomKarakterDizi[i] = "Büyücü🧙";
        }

        if(randomKarakterDizi[i] === "Blackmailer"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "blackmailer"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "BLACKMAİLER"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "Tehditçi"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "tehditçi"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "TEHDİTÇİ"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "Tehditkar"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "tehditkar"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }else if(randomKarakterDizi[i] === "TEHDİTKAR"){
            randomKarakterDizi[i] = "Blackmailer🖄";
        }

        if(randomKarakterDizi[i] === "Hypnotist"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "hypnotist"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "HYPNOTİST"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "hipnotizeci"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "HİPNOTİZECİ"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "Hipnotizeci"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "Hipnotize"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "HİPNOTİZE"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }else if(randomKarakterDizi[i] === "hipnotize"){
            randomKarakterDizi[i] = "Hypnotist😵";
        }

        if(randomKarakterDizi[i] === "Seri Katil"){
            randomKarakterDizi[i] = "SeriKatil🔪";
        }else if(randomKarakterDizi[i] === "SERİ KATİL"){
            randomKarakterDizi[i] = "SeriKatil🔪";
        }else if(randomKarakterDizi[i] === "seri katil"){
            randomKarakterDizi[i] = "SeriKatil🔪";
        }else if(randomKarakterDizi[i] === "SeriKatil"){
            randomKarakterDizi[i] = "SeriKatil🔪";
        }else if(randomKarakterDizi[i] === "SERİKATİL"){
            randomKarakterDizi[i] = "SeriKatil🔪";
        }else if(randomKarakterDizi[i] === "serikatil"){
            randomKarakterDizi[i] = "SeriKatil🔪";
        }

        if(randomKarakterDizi[i] === "Poisoner"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "poisoner"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "POİSONER"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "zehirci"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "ZEHİRCİ"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "Zehirci"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "zehirli"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "ZEHİRLİ"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }else if(randomKarakterDizi[i] === "Zehirli"){
            randomKarakterDizi[i] = "Poisoner🤮";
        }

        if(randomKarakterDizi[i] === "Survivor"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "survivor"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "SURVİVOR"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "Hayatta kalan"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "Hayatta Kalan"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "HAYATTA KALAN"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "HAYATTAKALAN"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "hayattakalan"){
            randomKarakterDizi[i] = "Survivor🤬";
        }else if(randomKarakterDizi[i] === "HayattaKalan"){
            randomKarakterDizi[i] = "Survivor🤬";
        }

        if(randomKarakterDizi[i] === "Executioner"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "executioner"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "EXECUTİONER"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "Head Hunter"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "HeadHunter"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "head hunter"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "headhunter"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "hayattakalan"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }else if(randomKarakterDizi[i] === "HayattaKalan"){
            randomKarakterDizi[i] = "Executioner🧔🏾";
        }
        

    }   

    console.log("Consol çıktımız bu halde : " + randomKarakterDizi);
    console.log("Consol çıktımız bu halde : " + randomIsimDizi);

    for(let i = 0; i < randomIsimDizi.length; i++){
        
        const rastgeleLiIsim = document.createElement('td');
        rastgeleLiIsim.textContent = randomIsimDizi[i].toString();
        const rastgeleLiKarakter = document.createElement('td');
        rastgeleLiKarakter.textContent = randomKarakterDizi[i].toString();
        const bosluk = document.createElement("br");
        bosluk.innerHTML = "<br>";
        rastgeleIsimUl.appendChild(rastgeleLiIsim);
        rastgeleIsimUl.appendChild(rastgeleLiKarakter);
        rastgeleIsimUl.appendChild(bosluk);

    }

}

//Gece Sayacı Bölümü
let counter = document.getElementById('counter');
let incr = document.querySelector('.artırma');
let decr = document.querySelector('.azaltma');

let count = 0;
incr.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});
decr.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});
function updateDisplay(){
    counter.innerHTML = count;
};


//Oyun ekranının yenilenmesini sağlayan kod bloğu
let oyunResetle = document.querySelector('.f5butonu');
oyunResetle.addEventListener("click",oyunResetFonk);

function oyunResetFonk(e){
    e.preventDefault();
    window.location.reload();
}