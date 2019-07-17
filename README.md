# storySimülatör


Story Simülatörü, sitelerinize yalnızca birkaç satır kod ile ekleyebileceğiniz story çubuğu yapmanızı sağlar.
Birkaç hatası bulunmakla birlikte, siteyi yormadan kullanabileceğiniz güzel bir eklenti ortaya çıkartmaya çalıştım.

**Bilinen Hatalar[-]**
  - Sonraki story'e geçmek için story'i kaydıramaz yada tıklayamazsın. Otomatik geçer.
  - Story'nin akış süresinin gözüktüğü çubuk yoktur.

# Neler Yapabilirsin?

  - Bir satır kodla istediğin kadar story ekleyebilirsin.
  - Birkaç satır kodla yeni story tanımlayabilirsin.
  - Mobil dostudur, mobilde de çalışır.



Sitenizde doğal bir şekilde durar. Beyaz arkaplanlara ve grimsi arkaplanlara hoş görüntü verir.
Slider olarak da kullanılabilir.(işlerimiz vs. tarzı)

### Kurulum

storySimulator çalışmak için [jQuery](https://code.jquery.com/) 'e ihtiyaç duyar.

jQuery'yi ve bu repo'daki storySimülator js ve css dosyalarını indirip kurulum yapacağınız dizine atın.

Sayfanız aşağıdaki gibi düzenlenmeli.

```html
<html>
<head>
<link rel="stylesheet" type="text/css" href="story_simulator.css" />
</head>
<body>


<!-- Sayfa İçi Gerekli Kodlar (Story'nin Yerleşeceği Yere Gelecek) Buradan -->
<div id="story_wrapper">
</div>
<div style="clear:both;"></div>
<!-- Buraya kadar -->


    <!-- Jquery Import -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- STORY SIMULATOR JS Import -->
    <script src="story_simulator.js"></script>
    
    <!-- STORY SIMULATOR ÇALIŞTIRMA -->
    
    <script>
    // uID = Benzersiz ID
    // pIMG = Profil Fotoğrafı
    // sLIST = Story Listesi
    // fID = Fotoğraf/Profil ID/Sahibi        
    new storySimulator({
        uID:"busraninPartisi",
        pIMG:"https://images.pexels.com/photos/1452954/pexels-photo-1452954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        sLIST:[
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        fID:"Büşra"
    }
    );
    
    </script>
    
</body>
</html>
```

StorySimulator'un Çalıştırılması

```javascript

    // uID = Benzersiz ID
    // pIMG = Profil Fotoğrafı
    // sLIST = Story Listesi
    // fID = Fotoğraf/Profil ID/Sahibi        
    new storySimulator({
        uID:"test",
        pIMG:"https://images.pexels.com/photos/1452954/pexels-photo-1452954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        sLIST:[
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        fID:"Büşra"
    }
    );
```

### Kurulum Açıklaması

Jquery ve simulator dosyalarını import ettikten sonra story kısmının sayfanızda görünmesini istediğiniz yere story_wrapper divini ve hemen altına clear:both divini ekliyorsunuz.
Ardından body tagının kapanmasından hemen önce, diğer importların(jquery ve simulator.js) altına yeni bir script tagı açıp simülator'ün çalışması için gereken düzeni giriyorsunuz.
Bu düzende yalnızca 4 adet değer giriyorsunuz.

**uID**
```
uID her bir story topuna verilen eşsiz isimdir. Burayı kesinlikle sayıyla başlatmamalı ve diğer oluşturacağınız story toplarından farklı bir isimle doldurmalısınız. Her story topunun kendine ait bir ismi olmalıdır.
SEO açısından bu ismi sizlere bıraktım.

örn: 'mertinGunlugu'
```
**pIMG**
```
Story topunda bulunacak olan profil fotoğrafının URL adresi.

örn: 'example.png'
```
**sLIST**
```
sLIST, story listesinin kısaltmasıdır. Bir array döner. Array içerisine dilediğiniz kadar tırnak açıp dilediğiniz kadar story ekleyebilirsiniz.
Her story arka arkaya 3'er saniye arayla dönecektir.
Tırnak içlerine story resimlerinin URL'lerini girin.

örn: [
"story1.png",
"story2.png",
"story3.png"
]
```
**fID**
```
fID fotoğraf ID anlamına gelir. Story topunda bulunan profil fotoğrafının title ve alt tagı için kullanılacak ismi girmelisiniz. seo için sizlere bıraktım.

örn: 'Ahmet'
```
### Örnek Görseller

![storysimulator](https://resmim.net/f/gFtnIp.png "Story Topları")
![mert can uslu](https://resmim.net/f/xbjjlp.png "Story İçi")




Lisans
----

MIT


