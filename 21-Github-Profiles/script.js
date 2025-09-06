// Grabs
const form = document.getElementById("search-form");
const input = document.getElementById("searchInput");
const userDetails = document.getElementById("userDetails");

// Helpers
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeUrl(url = "") {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function loadingUI() {
  userDetails.innerHTML = `
    <div class="profile">
      <div class="profile-details">
        <p>Loading…</p>
      </div>
    </div>
  `;
}

function renderUser(data) {
  const blog = data.blog ? `<a href="${normalizeUrl(data.blog)}" target="_blank" rel="noopener">${escapeHtml(data.blog)}</a>` : "Not Available";
  const twitter = data.twitter_username
    ? `<a href="https://twitter.com/${encodeURIComponent(data.twitter_username)}" target="_blank" rel="noopener">@${escapeHtml(data.twitter_username)}</a>`
    : "Not Available";

  userDetails.innerHTML = `
    <div class="profile">
      <div class="profile-image">
        <img class="profile-image-icon" src="${data.avatar_url}" alt="${escapeHtml(data.login)}'s avatar" />
      </div>
      <div class="profile-details">
        <h2 class="name">${escapeHtml(data.name ?? "")}</h2>
        <p class="username">@${escapeHtml(data.login)}</p>
        <p class="bio">${data.bio ? escapeHtml(data.bio) : "This account doesn't have bio"}</p>

        <div class="stats">
          <div>
            <div class="stats-name">Public Repos</div>
            <div class="stats-name">${data.public_repos}</div>
          </div>
          <div>
            <div class="stats-name">Followers</div>
            <div class="stats-name">${data.followers}</div>
          </div>
          <div>
            <div class="stats-name">Following</div>
            <div class="stats-name">${data.following}</div>
          </div>
        </div>

        <div class="media">
          <p>
            <span class="media-icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></span>
            <span class="media-name">${data.location ? escapeHtml(data.location) : "Not Available"}</span>
          </p>
          <p>
            <span class="media-icon"><i class="fas fa-link" aria-hidden="true"></i></span>
            <span class="media-name">${blog}</span>
          </p>
          <p>
            <span class="media-icon"><i class="fab fa-twitter" aria-hidden="true"></i></span>
            <span class="media-name">${twitter}</span>
          </p>
          <p>
            <span class="media-icon"><i class="fas fa-building" aria-hidden="true"></i></span>
            <span class="media-name">${data.company ? escapeHtml(data.company) : "Not Available"}</span>
          </p>
        </div>
      </div>
    </div>
  `;
}

function renderError(msg) {
  userDetails.innerHTML = `
    <div class="profile">
      <div class="profile-details">
        <p>${escapeHtml(msg)}</p>
      </div>
    </div>
  `;
}

// Core
async function fetchGithubUser(raw) {
  const username = raw.trim().replace(/^@/, ""); // allow "@user"
  if (!username) {
    alert("Please enter a username.");
    return;
  }

  const url = `https://api.github.com/users/${encodeURIComponent(username)}`; // BACKTICKS here
  loadingUI();

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (res.status === 404) {
      renderError("User not found. Check the spelling.");
      alert("Not Found");
      return;
    }

    if (!res.ok) {
      const errText = `Error: ${res.status} ${res.statusText}`;
      renderError(errText);
      alert(errText);
      return;
    }

    const data = await res.json();
    renderUser(data);
  } catch (e) {
    console.error(e);
    renderError("Network error. Please try again.");
    alert("Something went wrong. Please try again.");
  }
}

// Wire up form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchGithubUser(input.value);
  input.blur();
});
