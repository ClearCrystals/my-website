<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.body.style.margin = '0'; // This will only run in the browser
  });
  import '../../app.css';
</script>

<!-- Full Page Container -->
<div class="flex flex-col min-h-screen items-center bg-black text-white p-8">

  <!-- Title Section -->
  <section class="w-full max-w-5xl text-center py-12">
    <h1 class="font-dream-avenue text-[4em] lg:text-[6em] tracking-wide mb-4">About Me</h1>
    <p class="text-lg lg:text-2xl max-w-3xl mx-auto">
      Welcome to my professional portfolio! Here, you can learn more about my background, skills, and interests as a software consultant and engineer.
    </p>
  </section>

  <!-- About Me Details Section -->
  <section class="w-full max-w-5xl flex flex-col lg:flex-row gap-12 mt-12">

    <!-- Profile Image -->
    <div class="w-full lg:w-1/3 flex justify-center items-start">
      <img src="/profile.webp" alt="Your Profile" class="rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover">
    </div>

    <!-- About Me Text -->
    <div class="w-full lg:w-2/3 text-left">
      <h2 class="text-3xl mb-4">Who I Am</h2>
      <p class="text-lg mb-6 leading-relaxed">
        I am a software engineer with a passion for building efficient, scalable solutions. Over the past few years, I've been fortunate to work on various projects ranging from enterprise-level systems to innovative startup solutions.
      </p>
      <p class="text-lg leading-relaxed">
        My expertise lies in DevOps, cloud computing, and full-stack development, allowing me to bridge the gap between development and operations. I believe in writing clean, maintainable code and thrive in collaborative environments where I can contribute to the success of a team.
      </p>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="w-full max-w-5xl mt-16">
    <h2 class="text-3xl mb-6 text-center">Technical Skills</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
      <!-- Skill Block -->
      <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl mb-2">Frontend Development</h3>
        <p class="text-lg">JavaScript, Svelte, React, CSS, HTML</p>
      </div>

      <!-- Skill Block -->
      <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl mb-2">Backend Development</h3>
        <p class="text-lg">Node.js, Python, Java, C, MYSQL, APIs</p>
      </div>

      <!-- Skill Block -->
      <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl mb-2">DevOps & Cloud</h3>
        <p class="text-lg">Kubernetes, Docker, AWS, CI/CD</p>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="w-full max-w-5xl mt-16">
    <h2 class="text-3xl mb-6 text-center">Experience</h2>
    <div class="space-y-8">
      <!-- Job 1 -->
      <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl mb-2">Devops Software Engineer - Extreme Engineering Solutions</h3>
        <p class="text-lg">July 2021 - Present</p>
        <p class="leading-relaxed mt-2">
          Led the development of an Automated Phase Gate Linter, which compiled API-requested json data into a structured json format. <br><br>This initiative significantly increased productivity across other software engineering teams by streamlining processes and reducing manual effort. <br><br>
Implemented unit tests for an Analytics Generator, enhancing the atomicity of the code and creating a reusable foundation for multiple future scheduled projects. <br><br>This effort improved code reliability and facilitated more efficient project development.
        </p>
      </div>

      <!-- Job 2
      <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl mb-2">Software Engineer at ABC Inc</h3>
        <p class="text-lg">Feb 2018 - Dec 2020</p>
        <p class="leading-relaxed mt-2">
          As part of the full-stack development team, I built web applications and implemented CI/CD pipelines, enhancing software deployment efficiency by 40%.
        </p>
      </div> -->

      <!-- Job 3
      <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl mb-2">Junior Developer at DEF Solutions</h3>
        <p class="text-lg">Jun 2016 - Jan 2018</p>
        <p class="leading-relaxed mt-2">
          I started my career working on small internal applications while honing my skills in frontend and backend development, as well as building a solid understanding of DevOps practices.
        </p>
      </div> -->
    </div>
  </section>

  <!-- Personal Interests Section -->
  <section class="w-full max-w-5xl mt-16 mb-12">
    <h2 class="text-3xl mb-6 text-center">Personal Interests</h2>
    <p class="text-lg text-center max-w-3xl mx-auto leading-relaxed">
      Outside of work, I enjoy hiking, 3d printing, and creating projects. I also spend time learning new technologies to stay up-to-date with industry trends.
    </p>
  </section>

</div>

<style>
  /* Load the Dream Avenue Font */
  @font-face {
    font-family: 'Dream Avenue';
    src: url('/fonts/DreamAvenue.ttf') format('truetype');
    font-weight: lighter;
    font-style: normal;
  }

  .font-dream-avenue {
    font-family: 'Dream Avenue', sans-serif;
  }
</style>
