<script>
  let isDown = false;
  let startX;
  let scrollLeft;
  
  let slider;

  const handleMouseDown = (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    slider.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown = false;
    slider.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.9; // Even slower for smoother glide
    slider.scrollLeft = scrollLeft - walk;
  };
</script>

<!-- Full Page Container -->
<div class="flex flex-col min-h-screen items-center bg-black text-white p-8">
  
  <!-- Header Section -->
  <section class="w-full max-w-5xl text-center py-12">
    <h1 class="font-dream-avenue text-[4em] lg:text-[6em] tracking-wide mb-4">Projects</h1>
    <p class="text-lg lg:text-2xl max-w-3xl mx-auto">
      Explore some of my recent work and projects!
    </p>
  </section>

  <!-- Slider Section -->
<!-- Slider Section -->
<div 
  bind:this={slider} 
  class="slider flex space-x-8 py-6 cursor-grab overflow-hidden"
  on:mousedown={handleMouseDown}
  on:mouseleave={handleMouseLeave}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
>
  <!-- Card with Overlay Text and Link -->
  <a href="/games" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105" draggable="false">
    <img src="/image1.jpg" alt="Project 1" draggable="false" class="w-[300px] h-[500px] object-cover">
    <div class="overlay">Games</div>
  </a>
  
  <a href="https://example.com/graphics" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105" draggable="false">
    <img src="/image2.png" alt="Project 2" draggable="false" class="w-[300px] h-[500px] object-cover">
    <div class="overlay">Graphics</div>
  </a>
  
  <a href="https://example.com/3d-printing" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105" draggable="false">
    <img src="/image3.jpg" alt="Project 3" draggable="false" class="w-[300px] h-[500px] object-cover">
    <div class="overlay">3D Printing</div>
  </a>
  
  <a href="https://example.com/other" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105" draggable="false">
    <img src="/image4.jpg" alt="Project 4" draggable="false" class="w-[300px] h-[500px] object-cover">
    <div class="overlay">Other</div>
  </a>
  
  <a href="http://www.codecsclub.com.s3-website.us-east-2.amazonaws.com/index.html" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105" draggable="false">
    <img src="/image5.png" alt="Project 5" draggable="false" class="w-[300px] h-[500px] object-cover">
    <div class="overlay">CODECS Website</div>
  </a>
</div>

</div>

<style>
  .slider {
    display: flex;
    align-items: center;
    user-select: none;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Hide scrollbar in Firefox */
    perspective: 1000px; /* Adding perspective for parallax effect */
  }

  /* Hide scrollbar in Chrome, Safari, and Edge */
  .slider::-webkit-scrollbar {
    display: none;
  }

  .slider.active {
    cursor: grabbing;
  }

  /* Adding smoother transition for parallax effect */
  .slider > div {
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.3s ease-linear; /* 300ms transition with linear easing */
  }

  .slider > div:hover {
    transform: perspective(1000px) translateZ(-50px); /* Parallax effect without delay */
  }

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

/* Overlay Styling */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1); /* Semi-transparent black background */
  color: white;
  font-size: 1.5em;
  font-weight: normal;
  text-align: center;
  transition: background 0.3s ease;
}

.flex-none:hover .overlay {
  background: rgba(0, 0, 0, 0.6); /* Darker on hover */
}


</style>
