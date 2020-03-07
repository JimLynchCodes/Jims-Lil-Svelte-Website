<script>
  export let text;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  #neon {
    padding: 10px;
    background: #000;
  }

  #neon h1 {
    text-align: center;
    font-family: Arial;
    font-size: 200px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 3px #fff, 0 0 3px #00ff48,
      0 0 30px #00ff48, 0 0 30px #00ff48, 0 0 20px #00ff48, 0 0 1000px #00ff48;
  }
  #inset {
    padding: 20px;
    background: #474747;
  }
  #inset h1 {
    text-align: center;
    margin: 40px auto;
    font-family: Arial, Courier;
    font-size: 200px;
    text-transform: uppercase;
    color: #222;
    text-shadow: 0px 2px 3px #666;
  }
</style>

<main>
  <!-- <h1>Jim's Lil' Svelte App!</h1> -->
  <div id="neon">
    <h1>Jim's Lil' Svelte Webapp!</h1>
  </div>
  <br />
  <br />
  <h2>{text}</h2>
  <br />
  <br />
  <h2>Built with love by <a href="http://www.jimlynchcodes.com/about-jim.html">Jim</a>. ❤️</h2>
  <br />
  <a
    href="https://twitter.com/JimLynchCodes?ref_src=twsrc%5Etfw"
    class="twitter-follow-button"
    data-show-count="false">
    Follow @JimLynchCodes
  </a>
  <a
    class="github-button"
    href="https://github.com/JimLynchCodes"
    aria-label="Follow @JimLynchCodes on GitHub">
    Follow @JimLynchCodes
  </a>
  <br />
  <br />
  Curious about the source code for this site? It's all publicly available <a href="https://github.com/JimLynchCodes/Jims-Lil-Svelte-Website">right here</a>!
  <br />
  <br />
  <br />
</main>
