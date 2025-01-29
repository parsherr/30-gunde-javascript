const fs = require('fs');
const path = require('path');

function createDays() {
  const baseFolder = path.join(__dirname, 'günler');
  
  if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder, { recursive: true });
  }

  for (let day = 1; day <= 32; day++) {
    const folderName = `gün-${day}`;
    const folderPath = path.join(baseFolder, folderName);
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    const header = `<div align="center">
    <h1>10 Günde Javascript</h3>
    <h3>${day}. Gün ✨</h3>
</div>\n\n`;

    let prevLink = '';
    let nextLink = '';
    
    if (day === 1) {
      prevLink = '[<< Ana sayfa](../../README.md)';
      nextLink = `[Gün ${day + 1} >>](../../günler/gün-${day + 1}/gun-${day + 1}.md)`;
    } else if (day === 32) {
      prevLink = `[<< Gün ${day - 1}](../../günler/gün-${day - 1}/gun-${day - 1}.md)`;
    } else {
      prevLink = `[<< Gün ${day - 1}](../../günler/gün-${day - 1}/gun-${day - 1}.md)`;
      nextLink = `[Gün ${day + 1} >>](../../günler/gün-${day + 1}/gun-${day + 1}.md)`;
    }

    const navigation = nextLink 
      ? `${prevLink} | ${nextLink}`
      : prevLink;

    const content = `${header}${navigation}\n\n.....\nİçerikler buraya\n.....\n\n${navigation}`;

    const fileName = `gun-${day}.md`;
    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, content);
  }
}

createDays();
console.log('Yapı başarıyla oluşturuldu! 📂');