import fs from 'fs';
import path from 'path';

export interface Quote {
  text: string;
  author: string;
}

export function getRandomQuote(): Quote {
  try {
    const filePath = path.join(process.cwd(), 'public', 'quotes.txt');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Split by the ;; delimiter
    const quotesList = fileContent
      .split(';;')
      .map(q => q.trim())
      .filter(q => q.length > 0);
      
    if (quotesList.length === 0) {
      return {
        text: "Make it simple, but significant.",
        author: "Don Draper"
      };
    }
    
    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    const selectedQuote = quotesList[randomIndex];
    
    // Parse author if it is formatted like "Quote text - Author"
    // We split by " - " from the right side
    const dashIndex = selectedQuote.lastIndexOf(' - ');
    if (dashIndex !== -1) {
      const text = selectedQuote.substring(0, dashIndex).trim();
      const author = selectedQuote.substring(dashIndex + 3).trim();
      return { text, author };
    }
    
    return {
      text: selectedQuote,
      author: "Unknown"
    };
  } catch (error) {
    console.error("Error reading quotes.txt:", error);
    return {
      text: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman"
    };
  }
}
