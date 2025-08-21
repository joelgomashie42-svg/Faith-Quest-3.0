// Simple navigation helper: use replace() so Android back button
// doesn’t walk through every past session.
window.nav = {
  replace(url){ location.replace(url); return false; },
  toLevels({category, book}) {
    const qs = new URLSearchParams();
    qs.set('category', category);
    if (book) qs.set('book', book);
    location.replace('levels.html?' + qs.toString());
    return false;
  },
  replaceBackToLevels(){
    // Build levels URL from current quiz params
    const sp = new URLSearchParams(location.search);
    const category = sp.get('category') || 'general';
    const book = sp.get('book');
    const qs = new URLSearchParams(); qs.set('category', category); if (book) qs.set('book', book);
    location.replace('levels.html?' + qs.toString());
    return false;
  },
  
  // App-like navigation - always go to home on back
  handleBackButton() {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      location.replace("home.html");
    };
  }
};
