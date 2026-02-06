export interface BlogMeta {
  image: string;
  id: string;
  title: string;
  description: string;
}

// Using public folder paths to match existing project structure
// If images are imported (like in reference files), change to import statements
const blogMeta: BlogMeta[] = [
  {
    image: '/assets/images/Blog/meta/1.jpg',
    id: 'blog-1',
    title: 'Internet Safety for Students: Why It Matters More Than Ever',
    description: 'Learn why internet safety for students is more important than ever. Explore risks, prevention tips, and expert guidance for parents and schools.',
  },
  {
    image: '/assets/images/Blog/meta/2.jpg',
    id: 'blog-2',
    title: 'The Power of Color in Interior Design',
    description: 'Color is one of the most powerful tools in interior design. Learn how color affects mood, creates cohesive palettes, and transforms your home.',
  },  
  {
    image: '/assets/images/Blog/meta/3.jpg',
    id: 'blog-3',
    title: 'Why Hiring an Interior Designer Is a Smart Investment',
    description: 'Hiring an interior designer is not just about aesthetics—its about making smart decisions that save time, money, and stress. Learn what an interior designer brings to your project.',
  },  
  {
    image: '/assets/images/Blog/meta/4.jpg',
    id: 'blog-4',
    title: 'How Medical Rehabilitation Improves Quality of Life',
    description: 'Discover how medical rehabilitation restores mobility, independence, and confidence after major illness. Learn benefits, stages, therapies, and recovery tips.',
  },
];

export default blogMeta;

