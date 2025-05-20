// Replace with your actual Pleroma instance URL, your Pleroma account ID, and your access token
const pleromaInstance = 'https://rpgmaker.cafe';
const accountId = 'ophanimkei';
const accessToken = '2jxVwNlLhGTIDwQc_TyDmfxmFTmvaWc7pM6Avs1oTH8';

// Fetch custom emojis from Pleroma API
fetch(`${pleromaInstance}/api/v1/custom_emojis`, {
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
})
.then(response => response.json())
.then(customEmojis => {
    // Create a map of custom emoji names to their image URLs
    const customEmojiMap = {};
    customEmojis.forEach(emoji => {
        customEmojiMap[emoji.shortcode] = emoji.url;
    });

    // Fetch your own posts from Pleroma API excluding retweets and replies
    fetch(`${pleromaInstance}/api/v1/accounts/${accountId}/statuses?exclude_reblogs=true&exclude_replies=true`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data); // Log the response data
        const postsDiv = document.getElementById('posts');
        // Loop through the posts and display only the public ones
        data.forEach(post => {
            if (post.visibility === 'public') {
                // Replace custom emoji names with their image URLs in the post content
                let contentWithCustomEmojis = post.content;
                for (const emojiName in customEmojiMap) {
                    const emojiUrl = customEmojiMap[emojiName];
                    const emojiPattern = new RegExp(`:${emojiName}:`, 'g');
                    contentWithCustomEmojis = contentWithCustomEmojis.replace(emojiPattern, `<img src="${emojiUrl}" alt="${emojiName}" />`);
                }

                // Format the date to a more readable format with spaces
                const postDate = new Date(post.created_at);
                const formattedDate = postDate.toLocaleString();

                // Create a div for each post with a unique class (e.g., post-1, post-2, ...)
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `<p>${contentWithCustomEmojis}</p><small>${formattedDate}</small>`;
                postsDiv.appendChild(postDiv);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });
})
.catch(error => {
    console.error('Error fetching custom emojis:', error);
});
