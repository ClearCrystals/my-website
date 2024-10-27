<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.body.style.margin = '0'; // Ensures no default margin
  });
  import '../app.css';
</script>

<!-- Black Divider on the Left, hidden on small screens, and doesn't cover footer -->
<div class="w-[11%] lg:h-screen bg-black fixed top-0 left-0 z-30 hidden lg:block"></div>

<!-- Main Content -->
<div class="flex flex-col lg:flex-row min-h-screen justify-center items-center relative text-center lg:text-left bg-black">
  
  <!-- Parallax Image Section, sitting at the top -->
  <div class="w-full h-[50vh] sm:h-[50vh] lg:min-h-screen lg:w-1/2 bg-cover bg-center bg-fixed z-20" 
       style="background-image: url('/landing.jpg'); filter: blur(0.6px);"></div>

  <!-- White Cutoff Box with Horizontal and Vertical Lines -->
  <div class="absolute left-[40%] top-0 h-screen w-[6%] flex flex-col justify-between hidden lg:flex z-10">
    <!-- Top Horizontal Line -->
    <div class="relative w-full h-[0.8rem] bg-white mt-40">
      <div class="absolute left-[-1rem] w-[1rem] h-full bg-black"></div> <!-- Black cutoff effect -->
    </div>
    <!-- Vertical Line -->
    <div class="relative w-full h-full">
      <div class="absolute right-[0%] w-[9px] h-full bg-white"></div>
    </div>
    <!-- Bottom Horizontal Line -->
    <div class="relative w-full h-[0.8rem] bg-white mb-32">
      <div class="absolute left-[-1rem] w-[1rem] h-full bg-black"></div>
    </div>
  </div>

  <!-- Right Text Section -->
  <div class="w-full min-h-[50vh] lg:min-h-screen flex flex-col justify-center text-white bg-black p-12 lg:pl-32 lg:pt-0 box-border lg:w-[70%] z-0">
    <!-- Grace Steinmetz with responsive styling -->
    <h1 class="font-dream-avenue text-[3em] mb-2 tracking-wide lg:text-[6em] lg:flex lg:flex-col lg:gap-1 lg:mb-4">
      <span class="block lg:inline">Grace</span>
      <span class="block lg:inline">Steinmetz</span>
    </h1>
    
    <!-- Job Title -->
    <h2 class="text-[1.2em] my-2 lg:text-2xl">Software Engineer</h2>
  </div>
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
