function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}
function displayPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList.add('post')
    postDiv.innerHTML = `
    <h4>Post id: ${post.userId}</h4>
    <h5>Post title: ${post.title}</h5>
    <p>Post description: ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}
loadPosts();


function deleteAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
}


function patchAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function createAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}