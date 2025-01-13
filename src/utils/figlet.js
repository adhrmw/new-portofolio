import fs from 'fs';
import path from 'path';
import figlet from 'figlet';

export async function generateFigletText(text, fontName = 'Standard') {
  if (fontName === 'Standard') {
    return new Promise((resolve, reject) => {
      figlet.text(
        text,
        {
          font: 'small',
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
    });
  } else {

    try {
      const fontPath = path.join(process.cwd(), 'public', 'fonts', `${fontName}.flf`);
      const fontData = await fs.promises.readFile(fontPath, 'utf8');

      figlet.parseFont(fontName, fontData);

      return new Promise((resolve, reject) => {
        figlet.text(
          text,
          {
            font: fontName,
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
      });
    } catch (err) {
      throw new Error(`Error loading custom font: ${err.message}`);
    }
  }
}
