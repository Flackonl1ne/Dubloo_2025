const KEY_USER = "dubloo_demo_user";
const KEY_POSTS = "dubloo_posts";
const KEY_REVIEWS = "dubloo_reviews";
const KEY_LIKES = "dubloo_likes";

export function getDemoUser() {
  try {
    const raw = localStorage.getItem(KEY_USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setDemoUser(user) {
  localStorage.setItem(KEY_USER, JSON.stringify(user));
  return user;
}

export function logoutDemoUser() {
  localStorage.removeItem(KEY_USER);
}

export function loadPosts() {
  try {
    const raw = localStorage.getItem(KEY_POSTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function savePost(post) {
  const all = loadPosts();
  all.unshift(post);
  localStorage.setItem(KEY_POSTS, JSON.stringify(all));
  return all;
}

export function loadReviews() {
  try {
    const raw = localStorage.getItem(KEY_REVIEWS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveReview(review) {
  const all = loadReviews();
  all.unshift(review);
  localStorage.setItem(KEY_REVIEWS, JSON.stringify(all));
  return all;
}

export function loadLikes() {
  try {
    const raw = localStorage.getItem(KEY_LIKES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleLike(item) {
  const all = loadLikes();
  const idx = all.findIndex(x => x.id === item.id);
  if (idx >= 0) all.splice(idx, 1);
  else all.unshift(item);
  localStorage.setItem(KEY_LIKES, JSON.stringify(all));
  return all;
}

export function formatRelativeTime(iso) {
  if (!iso) return "Just now";
  const now = new Date();
  const t = new Date(iso);
  const mins = Math.floor((now - t) / (1000 * 60));
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} minutes ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hours ago`;
  const days = Math.floor(hrs / 24);
  return `${days} days ago`;
}
