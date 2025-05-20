// Replace with your actual Pleroma instance URL, your Pleroma account ID, and your access token
const pleromaInstance = 'https://rpgmaker.cafe';
const accountId = 'AYOJ6b2B7l6iY4ZPVo';
const accessToken = 'fEoZdhL1XYFiJumbUU_VuULSRfuaUTFAhUwdvn8sN-k';

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
    const postsDiv = document.getElementById('posts');
    // Sort the posts based on the 'created_at' field in descending order (most recent first)
    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    if (data.length > 0) {
      const mostRecentPost = data[0]; // Get the most recent post
      // Replace custom emoji names with their image URLs in the post content
      let contentWithCustomEmojis = mostRecentPost.content;
      for (const emojiName in customEmojiMap) {
        const emojiUrl = customEmojiMap[emojiName];
        const emojiPattern = new RegExp(`:${emojiName}:`, 'g');
        contentWithCustomEmojis = contentWithCustomEmojis.replace(emojiPattern, `<img src="${emojiUrl}" alt="${emojiName}" />`);
      }

      // Format the date to a more readable format with spaces
      const postDate = new Date(mostRecentPost.created_at);
      const formattedDate = postDate.toLocaleString();

      // Create a div for the most recent post
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `<p>${contentWithCustomEmojis}</p><small>${formattedDate}</small>`;
      postsDiv.appendChild(postDiv);
    }
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });
})
.catch(error => {
  console.error('Error fetching custom emojis:', error);
});