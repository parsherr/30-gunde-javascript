const fs = require("fs");
const path = require("path");

// "gün-planları" klasörünün yolunu al
const folderName = path.join(__dirname, "gün-planları");

// Eğer "gün-planları" klasörü yoksa oluştur
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
  console.log(`"${folderName}" klasörü oluşturuldu.`);
} else {
  console.log(`"${folderName}" klasörü zaten mevcut.`);
}

// 11'den 32'ye kadar dosyaları oluştur
for (let i = 11; i <= 32; i++) {
  const filePath = path.join(folderName, `gun-${i}.md`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `# Gün ${i}\n\nBu, gün ${i} için bir plan dosyasıdır.`, "utf8");
    console.log(`"${filePath}" oluşturuldu.`);
  } else {
    console.log(`"${filePath}" zaten mevcut.`);
  }
}

console.log("Tüm dosyalar başarıyla oluşturuldu!");
