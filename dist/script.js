const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-schme: dark)").matches;

const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();

// const showSignup = () => {
//   const signupSection = document.getElementById('signup-section')
//   const signupIdSection = document.getElementById('signupId-section')

//   const signinSection = document.getElementById('signin-section')
//   const signinIdSection = document.getElementById('signinId-section')

//   signupSection.classList.remove('hidden')
//   signupIdSection.classList.remove('hidden')
//   signupSection.classList.add('fade-in');
//   signupIdSection.classList.add('fade-in');

//   signinSection.classList.add('display-none')
//   signinIdSection.classList.add('display-none')
// }

// const showSignin = () => {
//   const signupSection = document.getElementById('signup-section')
//   const signupIdSection = document.getElementById('signupId-section')

//   const signinSection = document.getElementById('signin-section')
//   const signinIdSection = document.getElementById('signinId-section')

//   signinSection.classList.remove('display-none')
//   signinIdSection.classList.remove('display-none')

//   signupSection.classList.add('hidden')
//   signupIdSection.classList.add('hidden')
// }

const showSignup = () => {
  const signupSection = document.getElementById("signup-section");
  const signinSection = document.getElementById("signin-section");
  const signinIdSection = document.getElementById("signinId-section");
  const signupIdSection = document.getElementById("signupId-section");

  signupSection.classList.remove("hidden");
  signupIdSection.classList.remove("hidden");
  signupSection.classList.add("animate__animated", "animate__flipInY");

  signinSection.classList.add("hidden");
  signinIdSection.classList.add("hidden");
};

const showSignin = () => {
  const signupSection = document.getElementById("signup-section");
  const signinSection = document.getElementById("signin-section");
  const signinIdSection = document.getElementById("signinId-section");
  const signupIdSection = document.getElementById("signupId-section");

  signinSection.classList.remove("hidden");
  signinIdSection.classList.remove('hidden')
  signinSection.classList.add("animate__animated", "animate__flipInY");

  signupSection.classList.add("hidden");
  signupIdSection.classList.add('hidden')
};
