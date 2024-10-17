
const randomEmojis = [
    { code: 127881, emoji: '&#127881;' }, 
    { code: 127752, emoji: '&#127752;' },  
    { code: 128060, emoji: '&#128060;' }, 
    { code: 128520, emoji: '&#128520;' }, 
    { code: 128584, emoji: '&#128584;' }, 
    { code: 128406, emoji: '&#128406;' }, 
    { code: 128640, emoji: '&#128640;' }, 
    { code: 128118, emoji: '&#128118;' }, 
    { code: 128079, emoji: '&#128079;' }, 
    { code: 128701, emoji: '&#128701;' },  
    { code: 129303, emoji: '&#129303;' },  
    { code: 128147, emoji: '&#128147;' }, 
    { code: 127828, emoji: '&#127828;' },  
    { code: 128055, emoji: '&#128055;' }   
  ];
  
  // gallery container
  const gallery = document.querySelector('.emoji-gallery');

  randomEmojis.forEach(emojiObj => {
    const emojiCardHTML = `
      <div class="emoji-card">
        <div class="emoji">${emojiObj.emoji}</div>
        <div class="code">&#${emojiObj.code};</div>
      </div>
    `;
    gallery.insertAdjacentHTML('beforeend', emojiCardHTML);
  });
s  