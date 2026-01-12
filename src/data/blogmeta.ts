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
    title: 'Top 10 Physical Therapies to Speed Up Injury Recovery',
    description: 'Discover the top 10 physical therapies that speed up injury recovery, reduce pain, and restore mobility fast. Expert tips from ARC Medical Rehab.',
  },
  {
    image: '/assets/images/Blog/meta/2.jpg',
    id: 'blog-2',
    title: 'The Complete Physical Rehabilitation Journey Explained',
    description: 'Discover the full physical rehabilitation journey—from injury to full recovery. Expert guidance to heal faster and regain strength at ARC Medical Rehab.',
  },  
  {
    image: '/assets/images/Blog/meta/3.jpg',
    id: 'blog-3',
    title: 'Beginner\'s Guide to Physical Rehab for All Ages',
    description: 'Start your recovery journey with this beginner-friendly guide to physical rehab for all ages. Learn benefits, stages, and expert tips from ARC Medical Rehab.',
  },  
  {
    image: '/assets/images/Blog/meta/4.jpg',
    id: 'blog-4',
    title: 'How Medical Rehabilitation Improves Quality of Life',
    description: 'Discover how medical rehabilitation restores mobility, independence, and confidence after major illness. Learn benefits, stages, therapies, and recovery tips.',
  },
];

export default blogMeta;

