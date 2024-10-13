<script>
  import Navbar from '$lib/components/Navbar.svelte';

  // Navbar links
  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' }
  ];
</script>

<Navbar {links} />

<div class="landing">
  <div class="image-section"></div>
  <div class="text-section">
    <h1>Grace Steinmetz</h1>
    <h2>Software Consultant</h2>
    <h2>and</h2>
    <h2>Software Engineer</h2>
    <p class="services">Services Available</p>
  </div>
</div>

<style>
  /* General Styles */
  body {
    margin: 0;
    font-family: 'Serif', sans-serif;
  }

  .landing {
    display: flex;
    height: 100vh;
  }

  /* Left Image Section */
  .image-section {
    width: 50%;
    background: url('/path-to-your-image/Grace Steinmetz.png') no-repeat center center;
    background-size: cover;
    filter: blur(3px);
    transform: scale(1.1);
  }

  /* Right Text Section */
  .text-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 4em;
    color: white;
    background-color: black;
  }

  h1 {
    font-size: 4em;
    font-weight: bold;
    margin-bottom: 0.5em;
    letter-spacing: 0.1em;
  }

  h2 {
    font-size: 1.5em;
    margin: 0.5em 0;
  }

  .services {
    font-size: 1.3em;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 2em;
    letter-spacing: 0.2em;
  }
</style>
