// Replace this with your repository URL when it is ready, e.g. https://github.com/your-name/your-repo
const githubRepository = "https://github.com/";

document.querySelectorAll("#github-link, #github-link-secondary, #github-link-footer")
  .forEach((link) => { link.href = githubRepository; });
