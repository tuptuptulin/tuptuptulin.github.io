document.addEventListener("DOMContentLoaded", function() {
    // Function to show all blogs
    function showAllBlogs() {
        const displayBlogs = document.querySelector('.displayBlogs');
        if (!displayBlogs) return;

        // Clear existing content
        displayBlogs.innerHTML = '';

        // Load all blog previews
        const blogPreviews = getAllBlogPreviews();
        blogPreviews.forEach(preview => {
            displayBlogs.innerHTML += preview;
        });

        // Load ADS preview
        loadAdsPreview();
    }

    // Function to show blogs belonging to a specific category
    function showCategory(category) {
        const displayBlogs = document.querySelector('.displayBlogs');
        if (!displayBlogs) return;

        // Clear existing content
        displayBlogs.innerHTML = '';

        if (category === 'ALL') {
            showAllBlogs();
            return;
        }

        // Get blog previews for the selected category
        const blogPreviews = getAllBlogPreviews().filter(preview => {
            const div = document.createElement('div');
            div.innerHTML = preview;
            return div.querySelector('.blogContent').getAttribute('data-category') === category;
        });

        // Display filtered blogs
        blogPreviews.forEach(preview => {
            displayBlogs.innerHTML += preview;
        });

        // Load ADS preview if appropriate
        if (category === 'OPERATING SYSTEMS') {
            loadAdsPreview();
        }
    }

    // Helper function to get all blog previews
    function getAllBlogPreviews() {
        return [
            `<div class="blogContent blogPreview" data-category="OPERATING SYSTEMS" onclick="window.location.href='blogs/ads.html'">
                <h2>Understanding Alternate Data Streams (ADS) in NTFS</h2>
                <p>A look into how to use Alternate Data Streams in NTFS to store hidden data...</p>
                <button class="readMore">Read More</button>
            </div>`,
            // Add more blog previews here as needed
        ];
    }

    function loadAdsPreview() {
        const displayBlogs = document.querySelector('.displayBlogs');
        if (!displayBlogs) return;
        displayBlogs.innerHTML = `
            <div class="blogContent blogPreview" data-category="OPERATING SYSTEMS" onclick="window.location.href='blogs/ads.html'">
                <h2>Understanding Alternate Data Streams (ADS) in NTFS</h2>
                <p>A look into how to use Alternate Data Streams in NTFS to store hidden data...</p>
                <button>Read More</button>
            </div>
        `;
    }

    // Event listener for navigation items
    const navItems = document.querySelectorAll('.blogNav');
    navItems.forEach(function(navItem) {
        navItem.addEventListener("click", function() {
            var category = this.querySelector('.blogNavText').textContent.trim();
            showCategory(category);
        });
    });

    function validateBlogCategories() {
        const blogs = document.querySelectorAll('.blogContent');
        const validCategories = ['ALL', 'OPERATING SYSTEMS', 'LOW LEVEL STUFF', 'NETWORKS', 'PROGRAMMING', 'CHALLENGES'];
        
        blogs.forEach(function(blog) {
            var category = blog.getAttribute('data-category');
            if (!category || !validCategories.includes(category)) {
                console.warn('Blog missing valid category:', blog);
            }
        });
    }

    // Validate blog categories on load
    validateBlogCategories();
    // Initially show all blogs
    showAllBlogs();
});