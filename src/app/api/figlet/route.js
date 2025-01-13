import fs from 'fs';
import path from 'path';
import figlet from 'figlet';

export async function GET(req) {
  console.log('Received request at /api/figlet'); // Log request hitting the route

  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') || 'Default Text';
  const font = searchParams.get('font') || 'Standard';

  try {
    if (font === 'Standard') {
      const asciiArt = figlet.textSync(text, {
        font: 'Standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
      });
      return new Response(asciiArt, { status: 200 });
    } else {
      const fontPath = path.join(process.cwd(), 'public', 'fonts', `${font}.flf`);

      if (!fs.existsSync(fontPath)) {
        console.error('Font file not found:', fontPath);
        return new Response('Font file not found', { status: 404 });
      }

      const fontData = await fs.promises.readFile(fontPath, 'utf8');
      figlet.parseFont(font, fontData);

      const asciiArt = figlet.textSync(text, {
        font,
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
      });

      return new Response(asciiArt, { status: 200 });
    }
  } catch (err) {
    console.error('Error generating ASCII art:', err);
    return new Response('Error generating ASCII art', { status: 500 });
  }
}
