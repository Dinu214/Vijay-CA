document.querySelectorAll('.coach-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height / 2) / 20}deg)
            rotateY(${-(x - rect.width / 2) / 20}deg)
            translateY(-10px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});
