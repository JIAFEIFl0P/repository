// The public page for this project repository.
const githubRepository = "https://github.com/JIAFEIFl0P/repository";

document.querySelectorAll("#github-link, #github-link-secondary, #github-link-footer")
  .forEach((link) => { link.href = githubRepository; });
