const apiBase = 'http://localhost:3000';

document.getElementById('commentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const comment = document.getElementById('comment').value;

  await fetch(`${apiBase}/connect/comment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, comment })
  });
  alert('Comment posted!');
});

document.getElementById('reviewForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const reviewer = document.getElementById('reviewer').value;
  const review = document.getElementById('review').value;

  await fetch(`${apiBase}/connect/review`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reviewer, review })
  });
  alert('Review posted!');
});
