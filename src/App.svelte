<script>
  import '../global.css'
  import RatingComponent from './RatingComponent.svelte'
</script>

<main>
  <RatingComponent submitURL={"example.com"}/>
</main>

<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="https://github.com/CaosExa">CaosExa</a>.
</div>

<style>
  .attribution { font-size: 11px; text-align: center; margin-bottom:2rem; position:absolute;bottom:2rem}
  .attribution a { color: hsl(228, 45%, 44%); }
</style>