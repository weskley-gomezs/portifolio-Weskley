export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  tags: string[];
  color: string;
  rotation: number; // Rotated slightly for scrapbook feel
  tapeColor: string;
  imageSeed: string; // Used to generate creative SVG shapes dynamically
  link?: string;
  image?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'creative' | 'tools';
  color: string;
  stickerStyle: 'round' | 'star' | 'badge' | 'stamp';
}

export interface ScrapbookItem {
  id: string;
  type: 'sticker' | 'polaroid' | 'tape' | 'doodle';
  content: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}
