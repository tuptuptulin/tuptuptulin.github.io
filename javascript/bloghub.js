document.addEventListener("DOMContentLoaded", function() {
    // Function to show all blogs
    function showAllBlogs() {
        var blogs = document.querySelectorAll('.blog');
        blogs.forEach(function(blog) {
            blog.style.display = 'flex';
        });
        loadAdsPreview(); // Load ADS preview in "ALL"
    }

    // Function to show blogs belonging to a specific category
    function showCategory(category) {
        var blogs = document.querySelectorAll('.blog');
        blogs.forEach(function(blog) {
            var blogCategory = blog.getAttribute('data-category');
            if (blogCategory === category || category === 'ALL') {
                blog.style.display = 'flex';
            } else {
                blog.style.display = 'none';
            }
        });
        if (category === 'LOW LEVEL STUFF' || category === 'ALL') {
            loadAdsPreview();
        }
    }

    // Function to load a preview of the ADS article
    function loadAdsPreview() {
        var displayBlogs = document.querySelector('.displayBlogs');
        displayBlogs.innerHTML = `
            <div class="blogPreview" onclick="window.location.href='ads.html'">
                <h2>Understanding Alternate Data Streams (ADS) in NTFS</h2>
                <p>A look into how to use Alternate Data Streams in NTFS to store hidden data...</p>
                <button>Read More</button>
            </div>
        `;
    }

    // Event listener for navigation items
    var navItems = document.querySelectorAll('.blogNav');
    navItems.forEach(function(navItem) {
        navItem.addEventListener("click", function() {
            var category = this.querySelector('.blogNavText').textContent.trim();
            showCategory(category);
        });
    });

    // Initially show all blogs
    showAllBlogs();
});
