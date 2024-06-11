document.addEventListener('DOMContentLoaded', function() {
    function updateProfile() {
        const profileUsername = document.querySelector('.profile-username');
        const profileEmail = document.getElementById('profile-email');
        const profileName = document.getElementById('profile-name');
        const profileNick = document.getElementById('profile-nick'); // Adiciona esta linha
        const profileReviews = document.querySelector('.profile-reviews');

        const userProfile = {
            username: "",
            email: "usuario@example.com",
            name: "Adalberto",
            nick: "galinhaPintadinha123", // Adiciona esta linha
            reviews: [
                {
                    title: "Red Dead Redemption 2",
                    content: "A história de Arthur Morgan, um fora da lei membro da gangue Van der Linde."
                },
                {
                    title: "God Of War 4",
                    content: "A jornada de Kratos e seu filho Atreus em busca da verdade e redenção."
                }
            ]
        };

        profileUsername.textContent = userProfile.username;
        profileEmail.textContent = userProfile.email;
        profileName.textContent = userProfile.name;
        profileNick.textContent = userProfile.nick; // Adiciona esta linha

        profileReviews.innerHTML = `
            <h2>Minhas Resenhas</h2>
            ${userProfile.reviews.map(review => `
                <div class="review">
                    <h3>${review.title}</h3>
                    <p>${review.content}</p>
                </div>
            `).join('')}
        `;
    }

    updateProfile();

    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileModal = document.getElementById('editProfileModal');
    const closeEditProfileModalBtn = document.getElementById('closeEditProfileModalBtn');
    const editProfileForm = document.getElementById('editProfileForm');

    editProfileBtn.addEventListener('click', function() {
        editProfileModal.style.display = 'block';
    });

    closeEditProfileModalBtn.addEventListener('click', function() {
        editProfileModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    });

    editProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newUsername = document.getElementById('nick').value;
        const newEmail = document.getElementById('email').value;
        const newName = document.getElementById('nome').value;

        document.querySelector('.profile-username').textContent = newUsername;
        document.getElementById('profile-email').textContent = newEmail;
        document.getElementById('profile-name').textContent = newName;
        document.getElementById('profile-nick').textContent = newUsername; // Adiciona esta linha

        editProfileModal.style.display = 'none';
    });

    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const changePasswordModal = document.getElementById('changePasswordModal');
    const closeChangePasswordModalBtn = document.getElementById('closeChangePasswordModalBtn');
    const changePasswordForm = document.getElementById('changePasswordForm');

    changePasswordBtn.addEventListener('click', function() {
        changePasswordModal.style.display = 'block';
    });

    closeChangePasswordModalBtn.addEventListener('click', function() {
        changePasswordModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === changePasswordModal) {
            changePasswordModal.style.display = 'none';
        }
    });

    changePasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword === confirmPassword) {
            alert('Senha alterada com sucesso!');
            changePasswordModal.style.display = 'none';
        } else {
            alert('As novas senhas não coincidem. Tente novamente.');
        }
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'entrar.html';
    });
});