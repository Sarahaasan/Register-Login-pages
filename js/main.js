document.addEventListener('DOMContentLoaded', function() {
  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
  const logoutBtn = document.getElementById('logoutBtn');

  if (localStorage.getItem('Email')) {
    profileName.textContent = localStorage.getItem('FullName') || "No Name";
    profileEmail.textContent = localStorage.getItem('Email');
  } else {
    console.error("Error: Profile cannot be shown.");
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.clear();
      location.reload();
    });
  }
});