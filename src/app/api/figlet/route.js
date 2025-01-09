// src/app/api/figlet/route.js

import fs from 'fs';
import path from 'path';
import figlet from 'figlet';

export async function GET(req) {
  console.log('Received request at /api/figlet');  // Log request hitting the route

  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') || 'Default Text';
  const font = searchParams.get('font') || 'Standard';

  try {
    // Log the received font to ensure it's being passed correctly
    console.log('Font:', font);

    // Check if using the built-in 'Standard' font works
    const asciiArt = figlet.textSync(text, {
      font: 'Standard',  // Use built-in figlet font
      horizontalLayout: 'fitted',
      verticalLayout: 'fitted',
    });
    console.log('ASCII art generated with built-in font');  // Log successful generation
    return new Response(asciiArt, { status: 200 });

    // If custom font is used, try loading the custom font file
    const fontPath = path.join(process.cwd(), 'public', 'fonts', `${font}.flf`);
    console.log('Font path:', fontPath);  // Log the font path being used

    // Check if the font file exists before proceeding
    if (!fs.existsSync(fontPath)) {
      console.error('Font file not found:', fontPath);
      return new Response('Font file not found', { status: 404 });
    }

    const fontData = await fs.promises.readFile(fontPath, 'utf8');
    console.log('Font file read successfully');  // Log successful reading of font file

    const customAsciiArt = figlet.textSync(text, {
      font: fontData,  // Use custom font data
      horizontalLayout: 'default',
      verticalLayout: 'default',
    });
    console.log('ASCII art generated successfully with custom font');  // Log success

    return new Response(customAsciiArt, { status: 200 });
  } catch (err) {
    console.error('Error generating ASCII art:', err);
    return new Response('Error generating ASCII art', { status: 500 });
  }
}
