const profileAvatar = document.querySelector(".profile-avatar");
const profileName = document.querySelector(".profile-name");
const profileUserName = document.querySelector(".profile-username");

const repository = document.getElementById("repository");
const followersNumber = document.getElementById("followers");
const followingNumber = document.getElementById("following");
const linkUser = document.getElementById("link");

const endpoint = `https:/api.github.com/users/ElisbertoJunior`;

const requestUser = (endpoint) => {
  try {
    fetch(endpoint).then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer requisição");
        }
        return response.json();

      }).then((data) => {
        insertData(data);
      });
  } catch (error) {
    alert(error.message);
  }
};

const insertData = (data) => {
  const {
    avatar_url,
    name,
    login,
    public_repos,
    followers,
    following,
    html_url,
  } = data;

  profileAvatar.src = avatar_url;
  profileName.innerText = name;
  profileUserName.innerText = `@${login}`;
  repository.innerText = public_repos;
  followersNumber.innerText = followers;
  followingNumber.innerText = following;
  linkUser.href = html_url;
}


requestUser(endpoint);