import fs from 'fs';
import path from 'path';
import figlet from 'figlet';

export function generateFigletText(text, fontName = 'Standard') {
  return new Promise((resolve, reject) => {
    if (fontName !== 'Standard') {
      const fontPath = path.join(process.cwd(), 'public', 'fonts', `${fontName}.flf`);

      fs.readFile(fontPath, 'utf8', (err, fontData) => {
        if (err) {
          reject('Error reading custom font file');
          return;
        }

        figlet.text(
          text,
          {
            font: fontData,
            horizontalLayout: 'default',
            verticalLayout: 'default',
          },
          (figletErr, data) => {
            if (figletErr) {
              reject(figletErr);
            } else {
              resolve(data);
            }
          }
        );
      });
    } else {
      figlet.text(
        text,
        {
          font: 'Standard',
          horizontalLayout: 'default',
          verticalLayout: 'default',
        },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    }
  });
}
