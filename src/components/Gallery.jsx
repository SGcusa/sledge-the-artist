import { useState } from 'react';

const galleryData = [
  { id: 1, category: 'mural', size: 'large', img: '/images/potrait_1.jpg', title: 'Studio Work', dot: 'bg-blue' },
  { id: 2, category: 'portrait', size: 'square', img: '/images/frame_2.jpg', title: 'Portrait', dot: 'bg-red' },
  { id: 3, category: 'portrait', size: 'square', img: '/images/denim_3', title: 'Commission', dot: 'bg-red' },
  { id: 4, category: 'clothing', size: 'tall', img: '/images/potrait_6.jpg', title: 'Clothing Art', dot: 'bg-amber' },
  { id: 5, category: 'portrait', size: 'tall', img: '/images/denim_1', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 6, category: 'portrait', size: 'tall', img: '/images/potrait_4.jpg', title: 'Portrait', dot: 'bg-red' },
  { id: 7, category: 'clothing', size: 'tall', img: '/images/frame_1.jpg', title: 'Custom Piece', dot: 'bg-amber' },
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
              item.size === 'large' ? 'col-span-1 row-span-1' : ''
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