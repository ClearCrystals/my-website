<script>
  export let links = [];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 w-full bg-transparent flex justify-between items-center py-4">
  <!-- GS Logo -->
  <div class="pl-4">
    <span class="text-[2.5em] font-bold text-purple-300 uppercase font-dream-avenue">GS</span>
  </div>

  <!-- Navbar Links -->
  <ul class="flex gap-8 pr-4">
    {#each links as { href, label }}
      <li>
        <a href={href} class="text-white text-[1.2em] uppercase tracking-wide hover:underline">
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<slot />

<style>
  /* Load the Dream Avenue Font */
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
