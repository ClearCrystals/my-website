<script>
  const resources = [
    // {
    //   category: "Articles",
    //   items: [
    //     {
    //       title: "Design Best Practices",
    //       image: "/image1.jpg",
    //       link: "https://example.com/design-best-practices",
    //       description: "Learn the fundamentals of good design and how to apply them in your projects.",
    //     },
    //     {
    //       title: "Modern Web Development",
    //       image: "/image2.png",
    //       link: "https://example.com/web-development",
    //       description: "An overview of modern web development practices and tools.",
    //     },
    //   ],
    // },
    {
      category: "Activities",
      items: [
        {
          title: "UPL",
          image: "/upl.PNG",
          link: "https://www.upl.cs.wisc.edu/",
          description: "A collaborative lab to laugh and learn",
        },
        {
          title: "MadHacks",
          image: "/madhacks.PNG",
          link: "https://madhacks.io/",
          description: "Wisconsin's Largest Hackathon",
        },
      ],
    },
    {
      category: "Videos",
      items: [
        {
          title: "Docker - UPL Lightning Talk",
          image: "/docker-talk.PNG",
          link: "https://www.youtube.com/watch?v=vaVCQN0ptOQ",
          description: "Inroduction to Docker",
        },
      ],
    },
  ];
</script>

<!-- Full Page Container -->
<div class="flex flex-col min-h-screen items-center bg-black text-white px-4 sm:px-8">
  <!-- Header Section -->
  <section class="w-full max-w-6xl text-center py-12">
    <h1 class="font-dream-avenue text-[4em] lg:text-[6em] tracking-wide mb-4">UW Madison Activities</h1>
    <p class="text-lg lg:text-2xl max-w-3xl mx-auto">
      These are amazing clubs to be have bee a part of.
    </p>
  </section>

  <!-- Resources Section -->
  {#each resources as { category, items }}
    <section class="w-full max-w-6xl mx-auto my-12">
      <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-center">{category}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {#each items as { title, image, link, description }}
          <a href={link} target="_blank" class="group block relative w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <!-- Thumbnail Image with fixed size -->
            <img src={image} alt={title} class="w-full h-[250px] object-cover">
            
            <!-- Resource Info -->
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">{title}</h3>
              <p class="text-base">{description}</p>
            </div>
          </a>
        {/each}
      </div>
    </section>
  {/each}
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

  /* Set fixed dimensions for images */
  img {
    width: 100%;
    height: 250px;
    object-fit: cover; /* Ensures the images maintain their aspect ratio */
  }
</style>
