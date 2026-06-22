import { useState, useEffect } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Anatomy of Conceptual Artwork',
    category: 'Visual Arts',
    date: 'OCT 12, 2025',
    img: '/images/potrait_1.jpg',
    excerpt: 'Exploring the delicate balance between thought, emotion, and technique in my latest gallery piece.',
    content: `
      <p>Every piece of conceptual art begins long before the brush touches the canvas. It starts with an idea, a fleeting thought, or an emotion that refuses to be ignored. In my latest portrait series, the goal was not just to capture a likeness, but to capture a state of mind.</p>
      <br/>
      <p>Working with oils allows for a level of depth and texture that is essential for this kind of work. The layering process is almost meditative. You build the shadows first, defining the structure of the face, before slowly introducing the mid-tones and finally the highlights that bring the subject to life.</p>
      <br/>
      <p>One of the biggest challenges in conceptual portraiture is knowing when to stop. There is a fine line between a finished painting and an overworked one. The raw, sometimes unfinished edges are intentional—they represent the incomplete nature of human memory and perception.</p>
    `,
    isComingSoon: false,
  },
  {
    id: 2,
    title: 'Designing for Impact: Switch Energy',
    category: 'Commercial Work',
    date: 'SEP 28, 2025',
    img: '/images/commercial_1.jpg',
    excerpt: 'A behind-the-scenes look at how we brought the tropical energy of Switch to life through vibrant packaging design.',
    content: `
      <p>Commercial work requires a completely different mindset than fine art. While fine art is deeply personal, commercial design is about solving a problem for a client and speaking directly to their target audience. When Switch Energy approached me for their new Tropical flavor, the brief was clear: make it stand out on the shelf.</p>
      <br/>
      <p>We started with mood boards, exploring various tropical motifs, neon color palettes, and typography that felt dynamic and fast-paced. The dark green background was chosen specifically to make the bright orange and yellow illustrations pop, creating a high-contrast label that commands attention.</p>
      <br/>
      <p>The final design process involved creating custom vector illustrations of the fruits and integrating them seamlessly around the central logo. It was a thrilling process combining digital illustration with brand strategy to deliver a product that looks as energetic as it tastes.</p>
    `,
    isComingSoon: false,
  },
  {
    id: 3,
    title: 'Mastering Pencil Commissions',
    category: 'Process',
    date: 'COMING SOON',
    img: '/images/frame_2.jpg',
    excerpt: 'My step-by-step process for creating hyper-realistic pencil portraits from standard reference photographs.',
    content: `
      <div class="text-center py-10">
        <h3 class="text-2xl md:text-4xl font-black uppercase tracking-widest text-cream mb-4">Article in Progress</h3>
        <p class="text-ink-200">I am currently documenting my entire pencil shading and blending process. This behind-the-scenes look will be published soon. Stay tuned!</p>
      </div>
    `,
    isComingSoon: true,
  }
];

export default function BlogSection() {
  const [activePost, setActivePost] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activePost]);

  return (
    <section id="blogs" className="py-16 md:py-24 px-4 md:px-16 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 flex flex-col items-center md:items-start">
          <p className="section-eyebrow">Insights & Stories</p>
          <h2 className="section-heading">The Journal</h2>
          <div className="section-divider"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer bg-[#111] border border-white/5 hover:border-[#D4A843]/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${post.isComingSoon ? 'grayscale opacity-60' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                
                {/* Coming Soon Badge */}
                {post.isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <span className="bg-[#D4A843] text-[#0a0a0a] text-[10px] font-black uppercase tracking-[0.2em] py-2 px-4 shadow-xl">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#D4A843] text-[9px] uppercase tracking-[0.2em] font-bold">
                    {post.category}
                  </span>
                  <span className="text-white/40 text-[9px] uppercase tracking-[0.2em]">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-white text-xl font-bold uppercase tracking-wide leading-snug mb-3 group-hover:text-[#D4A843] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-[#D4A843] transition-colors">
                    {post.isComingSoon ? 'Sneak Peek' : 'Read More'} 
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BLOG MODAL / POP-UP --- */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:py-12 bg-black/90 backdrop-blur-md">
          
          {/* Modal Background Click Area */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActivePost(null)}></div>
          
          {/* Modal Content Container */}
          <div className="relative bg-[#0f0f0f] w-full max-w-4xl max-h-full overflow-y-auto border border-white/10 shadow-2xl z-10 flex flex-col custom-scrollbar">
            
            {/* Close Button */}
            <button 
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 hover:bg-[#D4A843] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20"
            >
              ✕
            </button>

            {/* Modal Header Image */}
            <div className="w-full h-64 md:h-96 relative flex-shrink-0">
              <img 
                src={activePost.img} 
                alt={activePost.title} 
                className={`w-full h-full object-cover ${activePost.isComingSoon ? 'grayscale' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
            </div>

            {/* Modal Text Content */}
            <div className="p-6 md:p-12 -mt-20 md:-mt-32 relative z-10">
              <div className="bg-[#151515] p-6 md:p-10 border border-white/5 shadow-xl">
                
                <div className="flex flex-wrap gap-4 items-center mb-6">
                  <span className="bg-[#D4A843] text-black text-[10px] uppercase tracking-[0.2em] font-black py-1 px-3">
                    {activePost.category}
                  </span>
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                    {activePost.date}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white mb-8 leading-tight">
                  {activePost.title}
                </h2>

                <div 
                  className="prose prose-invert prose-p:text-white/70 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base max-w-none"
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Adding custom scrollbar style for the modal */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D4A843;
        }
      `}} />
    </section>
  );
}