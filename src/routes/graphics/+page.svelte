<script>
    const graphicsProjects = [
      { title: "Calm", image: "/calm.PNG", link: "/graphics/calm/project1.html" },
      { title: "Orbit", image: "/orbit.PNG", link: "/graphics/orbit1/intex.html" },
      { title: "Crazy Orbit", image: "/orbit2.PNG", link: "/graphics/orbit2/intex.html" },
      { title: "Crazy Collision", image: "collisioncraze.PNG", link: "/graphics/collisionCraze/index.html" },
      { title: "Point of View", image: "/pointOfView.PNG", link: "/graphics/pointOfView/index.html" },
      { title: "Shader", image: "/shader.PNG", link: "https://shdr.bkcore.com/#1/jVZbb9s2FP4rhJ8kR1Fixc7QeH7Ykg0YggbFWnQFliGgZdpiIJGCSDuyi/73HV4lKha2IHHoc/sOz5XfJxue7yvCpJjc/T2pG5JTQTlDBd0VNdqWHMvlM3tme0a3vKkMBUlakWVHPJA8Qw0RvNxLUAbOATdHynaKc4O2n7igZxlPoI1LDZBzJqQhoxLA5dcZgp+VJkXX6XWCZuoDTvESXV0ZIadn3NKkP5DRA+klGvyA2oZut3tBQkVcrSnE4F4rXqezxTLkWyXH/2nAFjXJ9yVu7mfjuEJiFQK4/jnPnYXflIXbOZgY4WcK4bbH70XsnpddxGY+YjMVsVCcr19JbuT74tfprQuwSolO67qkjH0qONs90CbS6hoMviVB2Jl03x+xP238SbiTKCijjAgRo+/PTEVHGxXgCdPlQE8kchDKcS9yCEQufVkFQiwQshUWSBSBxAFdIOH4QbZB7BED93GDpv6OcKxwa+pxw2XEEtAO1VWulK4A2Zq/RUP5Io6TXhSsbkPkvmG6lSLrQKJNKYEfOh2cbgCcsshHzlYv25VEF+YCIG1v+uuaZspcogXoawXlBJyVOBxzLiz5/WV0aWcW4MLCeF3dvR4Naoo3n1UVh4VjW1qXV4I+2E5Oeq2T9JogTo8u5mBw+c5+NmI/s1Y7kM7/nv3sP+z/8jDuvymExI+MxA+HXrulLZj3TeYj1A9sQ9drzv7CB5U5FcwZOG3Thy6R/VYStpNF1JW6yw7dogivRdSZidHPcO9sEYNDIsfNxjTxEBFqmDAwdlSwFeeyEJLUUKDzhYrbAj57NvuhMWQdINCtaBv5GybBELnRhuJkiBhY21KGy74xF/kLX0PulCV97LNm+/HV5msufsWCbByC3SKqcpWbYNvHNG3jBI2wjuOsUzwE3pUvvzd414OcR+pm3VWT0C8XJzuhocsnyegOxlLCxfeS+Au6nTrgMLdU3XqusHTUjxhE25A3RxXfkPIrJW/n2XXDVZ4BzPNH1vjo2h95QIRLrqarm3Q2ny0+DE1pB7+dpT4NqQ1++7b06+tPDnuXZA+R/gYfL5Ql/bkZPzM9TD2f7+XSEtQ5bVfdbJwaA2l72Y1RRzsGWsfVe4n24r0lo9UNfws/HPjWSROHVS/3SN83pJi4rGwdmOpUf/AKueeVeuwhWRBYcKXaQAgQkeTwQOE1km9USAhlB5a2J6hlH0ZPTKB0pzWdWsJx6mbYVG8F80b7Aq+d3ECq/Cik6eteSBhzBRUaH93Fnc/nwJ7+N5gyCb+CVjXsQywABLLMWXlUAzYn6tZINpgJXYkg2nDzKnMRspUcPBD6jaO2v/Ypdsmeq0ZUEyxsIRA07a8d9h2OuqYAHdBM2+NJ02F29DmDjtMvCaHqYvJPMtFGJ3fmv7gS+xNmjLyocZG+ismPfwE=" },
    ];
  </script>
  
  <!-- Full Page Container -->
  <div class="flex flex-col min-h-screen items-center bg-black text-white p-8">
    <!-- Header Section -->
    <section class="w-full max-w-5xl text-center py-12">
      <h1 class="font-dream-avenue text-[4em] lg:text-[6em] tracking-wide mb-4">Graphics</h1>
      <p class="text-lg lg:text-2xl max-w-3xl mx-auto">
        Explore some of my recent graphic work!
      </p>
    </section>
  
    <!-- Graphics Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-full max-w-6xl">
      {#each graphicsProjects as { title, image, link }}
        <a href={link} target="_blank" class="group relative block w-full h-[400px] overflow-hidden">
          <img src={image} alt={title} class="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110">
          <!-- Overlay with text -->
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p class="text-2xl lg:text-3xl">{title}</p>
          </div>
        </a>
      {/each}
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
  