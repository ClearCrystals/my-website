<script>
  import Navbar from '$lib/components/Navbar.svelte';

  const links = [
    { href: '/', label: 'Home' },
    // { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' }
  ];
</script>

<Navbar {links} />

<slot />

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

