document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts-container');
    
    if (postsContainer) {
        try {
            // Show skeleton loaders first
            postsContainer.innerHTML = Array(3).fill(`
                <div class="card post skeleton-card" style="padding-bottom: 16px;">
                    <div style="display:flex; gap:8px; margin-bottom: 12px;">
                        <div class="skeleton skeleton-avatar"></div>
                        <div style="flex: 1;">
                            <div class="skeleton skeleton-text" style="width: 40%"></div>
                            <div class="skeleton skeleton-text" style="width: 60%"></div>
                        </div>
                    </div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text" style="width: 80%"></div>
                    <div class="skeleton" style="height: 200px; width: 100%; margin-top: 12px; border-radius: 4px;"></div>
                </div>
            `).join('');

            // Inline data to avoid CORS on file:// protocol
            const data = {
                "posts": [
                    {
                        "id": 1,
                        "author": {
                            "name": "Jane Doe",
                            "headline": "Senior Software Engineer at Google | Tech Speaker",
                            "avatar": "https://i.pravatar.cc/150?img=1"
                        },
                        "timestamp": "2h",
                        "content": "Just wrapped up an amazing week discussing AI and the future of web development! 🚀 It's fascinating to see how fast frontend ecosystems are evolving. What are your thoughts on Vanilla JS vs Frameworks for modern apps? #webdev #javascript #ai",
                        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        "likes": 342,
                        "comments": 45,
                        "reposts": 12,
                        "isLiked": false
                    },
                    {
                        "id": 2,
                        "author": {
                            "name": "Alex Johnson",
                            "headline": "Product Manager | Building User-Centric Products",
                            "avatar": "https://i.pravatar.cc/150?img=11"
                        },
                        "timestamp": "5h",
                        "content": "I am thrilled to announce that I will be joining Microsoft as a Senior Product Manager next month! Huge thanks to everyone who supported me along this journey. Can't wait to get started! 🎉",
                        "likes": 1205,
                        "comments": 180,
                        "reposts": 30,
                        "isLiked": true
                    },
                    {
                        "id": 3,
                        "author": {
                            "name": "Sarah Williams",
                            "headline": "UX/UI Designer | Design Systems Advocate",
                            "avatar": "https://i.pravatar.cc/150?img=5"
                        },
                        "timestamp": "1d",
                        "content": "A clean, consistent design system can save hundreds of engineering hours. Here are my top 5 tips for maintaining a scalable design system in Figma... 👇",
                        "likes": 89,
                        "comments": 15,
                        "reposts": 5,
                        "isLiked": false
                    },
                    {
                        "id": 4,
                        "author": {
                            "name": "David Chen",
                            "headline": "Cloud Architect @ AWS | Tech Blogger",
                            "avatar": "https://i.pravatar.cc/150?img=12"
                        },
                        "timestamp": "2d",
                        "content": "The shift towards serverless architecture isn't just a trend; it's a paradigm shift in how we think about scale. If you're still managing infrastructure manually, it's time to explore AWS Lambda and API Gateway. I've just published a comprehensive guide on migrating legacy microservices to a serverless model. Check the link below! ☁️ #cloudcomputing #serverless #aws",
                        "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        "likes": 560,
                        "comments": 112,
                        "reposts": 88,
                        "isLiked": false
                    },
                    {
                        "id": 5,
                        "author": {
                            "name": "Emily Watson",
                            "headline": "Talent Acquisition Specialist | Helping You Land Your Dream Job",
                            "avatar": "https://i.pravatar.cc/150?img=33"
                        },
                        "timestamp": "3d",
                        "content": "A friendly reminder to all job seekers: Your resume tells us what you did, but your portfolio tells us what you CAN do. Always include a link to your live projects or GitHub! And please, tailor your summary to the role you're applying for. It makes a world of difference. 💡 #hiring #careeradvice #recruitment",
                        "likes": 2340,
                        "comments": 310,
                        "reposts": 450,
                        "isLiked": false
                    }
                ]
            };
            
            // Simulate network delay
            setTimeout(() => {
                renderPosts(data.posts, postsContainer);
            }, 800);
            
        } catch (error) {
            console.error("Error loading posts:", error);
            postsContainer.innerHTML = `<p class="text-center">Failed to load feed.</p>`;
        }
    }
});

function renderPosts(posts, container) {
    container.innerHTML = '';
    
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'card post';
        
        postEl.innerHTML = `
            <div class="post-header">
                <a href="profile.html" class="post-author">
                    <img src="${post.author.avatar}" alt="${post.author.name}">
                    <div class="post-author-info">
                        <h4>${post.author.name}</h4>
                        <p>${post.author.headline}</p>
                        <p>${post.timestamp}</p>
                    </div>
                </a>
                <button class="post-options">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path></svg>
                </button>
            </div>
            
            <div class="post-content">
                <p>${post.content}</p>
            </div>
            
            ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
            
            <div class="post-stats">
                <span>👍 ${post.likes}</span>
                <span>${post.comments} comments • ${post.reposts} reposts</span>
            </div>
            
            <div class="post-actions">
                <button class="post-action ${post.isLiked ? 'liked' : ''}" onclick="toggleLike(this)">
                    <svg viewBox="0 0 24 24"><path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.89L8.89 9H4.11a2.12 2.12 0 00-2.12 2.12 2.14 2.14 0 00.43 1.28L4 14l-1.58 1.6A2.14 2.14 0 002 16.88 2.12 2.12 0 004.11 19h11.34a2.15 2.15 0 001.93-1.16l2.94-6.06a2.16 2.16 0 00.22-.94A2.13 2.13 0 0019.46 11zM4 17h11l2.5-5H8.38l-1.07-3a11.23 11.23 0 01-.56-3.52V4A.75.75 0 017.5 3.25a.76.76 0 01.73.5l.5 1.5a9 9 0 002.16 3.51L14.8 12h2.2l-2.6 5.3H4v-1.8H5L4 14v-2h3.5v5H4z"></path></svg>
                    Like
                </button>
                <button class="post-action">
                    <svg viewBox="0 0 24 24"><path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5-6v12a2 2 0 01-2 2H6l-4 4V6a2 2 0 012-2h14a2 2 0 012 2zm-2 0H4v13.17L5.17 18H20z"></path></svg>
                    Comment
                </button>
                <button class="post-action">
                    <svg viewBox="0 0 24 24"><path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 4v2H2v-2a6 6 0 016-6h12l-4-6h2.39z"></path></svg>
                    Repost
                </button>
                <button class="post-action">
                    <svg viewBox="0 0 24 24"><path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path></svg>
                    Send
                </button>
            </div>
        `;
        
        container.appendChild(postEl);
    });
}

function toggleLike(btn) {
    btn.classList.toggle('liked');
}
