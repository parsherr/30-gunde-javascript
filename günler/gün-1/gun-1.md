<div align="center">
    <h1>10 Günde Javascript</h3>
    <h3>1. Gün ✨</h3>
</div>

[<< Ana sayfa](../../README.md) | [Gün 2 >>](../../günler/gün-2/gun-2.md)


## JavaScriptTanıtımı
JavaScript, web tarayıcılarında çalışan, web sayfalarını interaktif hale getiren programlama dilidir. Bir web sitesindeki her türlü hareketi, tıklama işlemini, form doldurma ve göndermeyi JavaScript ile yapabilirsiniz.

Ama bu açıklama tam olarak yeterli değil. Yukarıda ki açıklama Javascript'in ilk amacı anlatılıyor ama günümüzde Javascript kullanarak oyun yapmaktan tutun, Windows'da çalışan uygulamalara, Sosyal medya botlarına kadar aklınıza gelebilecek bir çok şeyi yapabilirsiniz

## Web Geliştirmedeki Yeri ve Önemi
- HTML: Sitenin iskeletini oluşturur
- CSS: Sitenin görünümünü düzenler
- JavaScript: Siteye hareket ve işlevsellik katar

Günümüzde neredeyse her web sitesi JavaScript kullanır çünkü modern web deneyimi için vazgeçilmezdir.

## Front-end vs Back-end
- Front-end: Kullanıcının gördüğü kısım (HTML, CSS, JavaScript)
- Back-end: Sunucu tarafında çalışan kısım (Node.js, Python, PHP gibi)

JavaScript özel bir dildir çünkü hem front-end hem de back-end (Node.js ile) tarafında kullanılabilir.

## JavaScript'in Tarihçesi
1995 yılında Brendan Eich tarafından Netscape için geliştirildi. İlk adı "Mocha" idi, sonra "LiveScript" ve en son "JavaScript" oldu. Java ile isim benzerliği dışında bir ilgisi yoktur.

## Geliştirme Ortamı Kurulumu

### VS Code İndirme ve Kurulum
1. [VScode](https://code.visualstudio.com) adresine gidin
2. İşletim sisteminize uygun sürümü indirin
3. Kurulum dosyasını çalıştırın ve varsayılan ayarlarla kurulumu tamamlayın

### Node.js İndirme ve Kurulum
1. [Node.js](https://nodejs.org/tr/download) adresine gidin
2. Direkt olarak aşağada yer alan "Windows Installer (.msi)" butonuna basarak .msi uzantılı setup dosyasını indirin
3. Kurulum dosyasını çalıştırın ve varsayılan ayarlarla kurulumu tamamlayın

### Önerilen Eklentiler
- **Live Server**: Sayfanızı canlı olarak görüntüler ve otomatik yeniler
- **JavaScript (ES6) code snippets**: Hazır kod parçacıkları sunar
- **Prettier**: Kodunuzu düzenli ve okunabilir hale getirir
- **ESLint**: Kod hatalarınızı bulur ve düzeltmenize yardımcı olur

## JavaScript Kodunu Çalıştırma

### HTML'e JavaScript Ekleme
```html
<!-- Head'de ekleme -->
<head>
    <script src="app.js"></script>
</head>

<!-- Body sonunda ekleme (önerilen) -->
<body>
    <!-- Sayfa içeriği -->
    <script src="app.js"></script>
</body>
```

### Body sonunda ekleme
- javascript kodlarınızı genelde body etiketinin içine eklemeniz önerilir.

### Harici JavaScript Dosyası
1. `app.js` adında bir dosya oluşturun
2. HTML dosyanıza `<script src="app.js"></script>` şeklinde ekleyin

## Console Kullanımı

### Browser DevTools
- Chrome/Edge: F12 veya Ctrl+Shift+I
- Firefox: F12 veya Ctrl+Shift+I
- Safari: Cmd+Option+I

### Temel Console Komutları
```javascript
// Normal mesaj
console.log("Merhaba Dünya");

// Uyarı mesajı (sarı)
console.warn("Bu bir uyarı");

// Hata mesajı (kırmızı)
console.error("Bu bir hata");

// Konsolu temizleme
console.clear();
```

## İlk JavaScript Programı

### Merhaba Dünya
```javascript
// app.js dosyasına yazın
console.log("Merhaba Dünya!");
```
 

### **Basit Matematiksel İşlemler**  

```javascript
// Toplama
console.log(2 + 3);  // 5

// Çıkarma
console.log(7 - 4);  // 3

// Çarpma
console.log(3 * 2);  // 6

// Bölme
console.log(8 / 2);  // 4
```

Burada basit dört işlem örneklerini gördük. Şimdi bir de kullanıcıdan veri almayı görelim.

---

### **Alert Kullanımı**  
Alert, ekranda küçük bir uyarı penceresi açar.
```javascript
alert("Merhaba!");
```
Bu kod çalıştığında, ekranda "Merhaba!" yazan bir kutu açılır.

### **Prompt Kullanımı**
Prompt, kullanıcıdan bilgi almak için bir kutu açar.
```javascript
prompt("Adın ne?");
```
Bu kod çalıştığında, "Adın ne?" sorusunu içeren bir kutu açılır ve kullanıcı cevap yazabilir.

Bu örneklerde:  
- **`alert()`** ekrana mesaj gösteriyoruz.  
- **`prompt()`** kullanıcıdan bilgi alıyoruz.  
- **`console.log()`** ile konsole yazı yazdırıyoruz. 
- **`console.warn()`** ile sarı bir uyarı mesajı gönderiyoruz.
- **`console.error()`** ile kırmızı bir hata mesajı gönderiyoruz. 

Böylece, yeni başlayan biri için anlaşılır bir temel oluşturduk. 🚀

### Live Server ile Çalıştırma
1. VS Code'da Live Server eklentisini kurun
2. HTML dosyanıza sağ tıklayın
3. "Open with Live Server" seçeneğini tıklayın
4. Tarayıcınızda otomatik olarak açılacaktır

Harika! Bu günün sonuna geldin! bu temel bilgiler, JavaScript öğrenmeye yeni başlayanlar için iyi bir başlangıç noktası olacaktır.
Gün 2'den devam etmek için aşağa da ki butona basabilirsin ^^


[<< Ana sayfa](../../README.md) | [Gün 2 >>](../../günler/gün-2/gun-2.md)
