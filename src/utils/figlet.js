import figlet from 'figlet';

export function generateFigletText(text) {
  return new Promise((resolve, reject) => {
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
  });
}
