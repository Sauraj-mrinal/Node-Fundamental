document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const imageLink = document.getElementById('imageLink').value;
        const description = document.getElementById('description').value;

        const response = await fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageLink, description })
        });

        const newPost = await response.json();
        displayPost(newPost);
    });

    async function fetchPosts() {
        const response = await fetch('/posts');
        const posts = await response.json();
        posts.forEach(displayPost);
    }

    function displayPost(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <img src="${post.imageLink}" alt="Post Image">
            <p>${post.description}</p>
            <form class="commentForm">
                <input type="text" placeholder="Add comment" required>
                <button type="submit">Comment</button>
            </form>
            <div class="comments"></div>
        `;

        const commentForm = postElement.querySelector('.commentForm');
        const commentsContainer = postElement.querySelector('.comments');

        commentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const commentInput = commentForm.querySelector('input');
            const comment = commentInput.value;
            if (comment.trim() === '') return;
            commentInput.value = '';

            const response = await fetch(`/posts/${post.id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment })
            });

            const newComment = await response.json();
            displayComment(newComment, commentsContainer);
        });

        post.comments.forEach(comment => {
            displayComment(comment, commentsContainer);
        });

        postsContainer.appendChild(postElement);
    }

    function displayComment(comment, container) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerText = comment.content;
        container.appendChild(commentElement);
    }

    fetchPosts();
});
