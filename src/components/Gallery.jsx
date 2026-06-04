import { useState } from 'react';

const galleryData = [
  { id: 1, category: 'mural', size: 'large', img: '/assets/images/Screenshot_20240219-152106.png', title: 'Studio Work', dot: 'bg-blue' },
  { id: 2, category: 'portrait', size: 'square', img: '/assets/images/Screenshot_20240219-1528592.png', title: 'Portrait', dot: 'bg-red' },
  { id: 3, category: 'portrait', size: 'square', img: '/assets/images/Screenshot_20240219-152813.png', title: 'Commission', dot: 'bg-red' },
  { id: 4, category: 'clothing', size: 'tall', img: '/assets/images/Screenshot_20240219-151300.png', title: 'Clothing Art', dot: 'bg-amber' },
  { id: 5, category: 'portrait', size: 'tall', img: '/assets/images/Screenshot_20240219-151649.png', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 6, category: 'portrait', size: 'tall', img: '/assets/images/Screenshot_20240219-1528593.png', title: 'Portrait', dot: 'bg-red' },
  { id: 7, category: 'clothing', size: 'tall', img: '/assets/images/Group_48.png', title: 'Custom Piece', dot: 'bg-amber' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredGallery = galleryData.filter(item => 
    filter === 'all' ? true : item.category === filter
  );

  return (
    <section id="work" className="py-20 px-8 md:px-16 bg-ink-800">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-heading">The Portfolio</h2>
          <div className="section-divider"></div>
        </div>
        
        <div id="filters" className="flex flex-wrap gap-px border border-ink-400 overflow-hidden">
          {['all', 'portrait', 'mural', 'clothing'].map((category) => (
            <button 
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : 'border-l border-ink-400 text-ink-200 hover:text-cream'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div id="gallery-grid" className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {filteredGallery.map((item) => (
          <div 
            key={item.id}
            className={`gallery-item relative overflow-hidden group cursor-pointer ${
              item.size === 'large' ? 'col-span-2 row-span-2' : ''
            }`} 
            style={{ 
              aspectRatio: item.size === 'square' ? '1' : item.size === 'tall' ? '4/5' : 'auto',
              minHeight: item.size === 'large' ? '320px' : 'auto'
            }}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.size === 'large' ? 'object-top' : ''}`} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3">
              <span className={`dot ${item.dot}`}></span>
              <span className="text-xs text-cream tracking-widest uppercase ml-2">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}