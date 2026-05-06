document.addEventListener('DOMContentLoaded', async () => {
    const jobsContainer = document.getElementById('jobs-container');
    
    if (jobsContainer) {
        try {
            // Skeleton loader
            jobsContainer.innerHTML = Array(3).fill(`
                <div class="job-card skeleton-card">
                    <div class="skeleton skeleton-avatar" style="border-radius: 0;"></div>
                    <div style="flex: 1;">
                        <div class="skeleton skeleton-text" style="width: 50%"></div>
                        <div class="skeleton skeleton-text" style="width: 30%"></div>
                        <div class="skeleton skeleton-text" style="width: 20%"></div>
                    </div>
                </div>
            `).join('');

            // Inline data to avoid CORS on file:// protocol
            const data = {
                "jobs": [
                    {
                        "id": 1,
                        "title": "Frontend Developer",
                        "company": "TechNova Solutions",
                        "location": "San Francisco, CA (Hybrid)",
                        "logo": "https://ui-avatars.com/api/?name=TN&background=0D8ABC&color=fff",
                        "salary": "$120K - $150K / yr",
                        "timePosted": "2 hours ago",
                        "applicants": 45
                    },
                    {
                        "id": 2,
                        "title": "UX/UI Designer",
                        "company": "CreativeMinds",
                        "location": "Remote",
                        "logo": "https://ui-avatars.com/api/?name=CM&background=E53935&color=fff",
                        "salary": "$90K - $120K / yr",
                        "timePosted": "1 day ago",
                        "applicants": 120
                    },
                    {
                        "id": 3,
                        "title": "Senior Software Engineer",
                        "company": "Global Systems Inc",
                        "location": "New York, NY",
                        "logo": "https://ui-avatars.com/api/?name=GS&background=4CAF50&color=fff",
                        "salary": "$160K - $200K / yr",
                        "timePosted": "3 days ago",
                        "applicants": 85
                    }
                ]
            };
            
            setTimeout(() => {
                renderJobs(data.jobs, jobsContainer);
            }, 600);
            
        } catch (error) {
            console.error("Error loading jobs:", error);
            jobsContainer.innerHTML = `<p class="text-center">Failed to load jobs.</p>`;
        }
    }
});

function renderJobs(jobs, container) {
    container.innerHTML = '';
    
    jobs.forEach(job => {
        const jobEl = document.createElement('div');
        jobEl.className = 'job-card';
        
        jobEl.innerHTML = `
            <img src="${job.logo}" alt="${job.company}" class="job-logo">
            <div class="job-info" style="flex: 1;">
                <h3 onclick="window.location.href='job-details.html?id=${job.id}'">${job.title}</h3>
                <p>${job.company}</p>
                <p class="job-meta">${job.location} • ${job.salary}</p>
                <p class="job-meta" style="color: var(--success-color);">${job.timePosted} • ${job.applicants} applicants</p>
            </div>
            <button class="post-options" style="align-self: flex-start;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path></svg>
            </button>
        `;
        
        container.appendChild(jobEl);
    });
}
