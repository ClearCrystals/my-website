<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte'; // Import the Footer component

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' }
  ];
</script>

<Navbar {links} />

<!-- This is where the page content gets rendered -->
<slot />

<!-- Add Footer below the slot, so it shows on every page -->
<Footer />

<style>
  @font-face {
    font-family: 'Dream Avenue';
    src: url('/fonts/DreamAvenue.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .font-dream-avenue {
    font-family: 'Dream Avenue', sans-serif;
  }
</style>
