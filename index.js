const fs = require('fs');
const path = require('path');

function createDays() {
  for (let day = 1; day <= 32; day++) {
    const folderName = `gün-${day}`;
    const folderPath = path.join(__dirname, folderName);
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    let content = `<div align="center">
  <h1>30 Günde Javascript</h1>
</div>\n\n`;

    let prevLink = '';
    let nextLink = '';

    if (day === 1) {
      prevLink = '[<< Ana sayfa](../README.md)';
      nextLink = `[Gün ${day + 1} >>](../gün-${day + 1}/gun-${day + 1}.md)`;
    } else if (day === 32) {
      prevLink = `[<< Gün ${day - 1}](../gün-${day - 1}/gun-${day - 1}.md)`;
    } else {
      prevLink = `[<< Gün ${day - 1}](../gün-${day - 1}/gun-${day - 1}.md)`;
      nextLink = `[Gün ${day + 1} >>](../gün-${day + 1}/gun-${day + 1}.md)`;
    }

    const navigation = nextLink 
      ? `${prevLink} | ${nextLink}`
      : prevLink;

    content += `${navigation}\n\n.....`;
    content += "\nİçerikler buraya\n.....\n\n";
    content += navigation;

    const fileName = `gun-${day}.md`;
    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, content);
  }
}

createDays();
console.log('32 günlük yapı başarıyla oluşturuldu!');