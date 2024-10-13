<script>
    // This can be updated with actual links for the games
    const games = [
      { name: "Space Rocket", image: "/SpaceRocket.PNG", link: "/games/spacerocket/SpaceRocket.html" },
      { name: "Space Glitch", image: "/SpaceGlitch.PNG", link: "/games/spaceglitch/SpaceGlitch.html" },
      { name: "Enigma of Willow Park", image: "/EnigmaOfWillowPark.PNG", link: "/games/enigmaofwillowpark/enigmaofwillowpark.html" },
      { name: "Click Shooter", image: "/ClickShooter.PNG", link: "/games/clickshooter/clickshooter.html" },
    //   { name: "Game 5", image: "/image1.jpg", link: "/game5" },
    //   { name: "Game 6", image: "/image2.png", link: "/game6" }
    ];
</script>
  
<div class="flex flex-col items-center min-h-screen bg-black text-white p-8">
    
    <!-- Header Section -->
    <section class="w-full max-w-5xl text-center py-12">
        <h1 class="font-dream-avenue text-[4em] lg:text-[6em] tracking-wide mb-4">Games</h1>
        <p class="text-lg lg:text-2xl max-w-3xl mx-auto">
            A collection of my game development projects.
        </p>
    </section>
  
    <!-- Grid Section -->
    <section class="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {#each games as { name, image, link }}
            <a href={link} target="_blank" rel="noopener noreferrer" class="relative overflow-hidden">
                <img src={image} alt={name} class="w-full h-[300px] object-cover" draggable="false" />
                <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span class="text-xl lg:text-2xl font-semibold">{name}</span>
                </div>
            </a>
        {/each}
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

    a {
        position: relative;
        transition: transform 0.3s ease;
    }

    a:hover {
        transform: scale(1.05);
    }
</style>
