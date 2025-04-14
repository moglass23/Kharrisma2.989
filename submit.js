
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate submission
  document.getElementById('rsvp-form').style.display = 'none';
  document.getElementById('success').style.display = 'block';
});
