<script>
  //import logo from './assets/svelte.png'
  import star from './assets/icon-star.svg'
  import thankYou from './assets/illustration-thank-you.svg'
  export let submitURL =''
  let rating
  let ratingSubmitted = false

 function handleSubmit(){
   console.log(`Value of ${rating} is passed to a server with URL: ${submitURL}`)
   ratingSubmitted=true
 }
</script>

{#if !ratingSubmitted}
  <div id="rating" class="card">
    <img alt="star-icon" src={star} class="icon">
    <h1>
      How did we do?
    </h1>
    
    <article>
      Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!
    </article>
    <ul class="rating"> 
      <li class="rating-button">
        <input type="radio" bind:group={rating} value={1} id="rb1">
        <label for="rb1">1</label>
      </li>
      <li class="rating-button">
        <input type="radio" bind:group={rating} value={2} id="rb2">
        <label for="rb2">2</label>
      </li>
      <li class="rating-button">
        <input type="radio" bind:group={rating} value={3} id="rb3">
        <label for="rb3">3</label>
      </li>
      <li class="rating-button">
        <input type="radio" bind:group={rating} value={4} id="rb4">
        <label for="rb4">4</label>
      </li>
      <li class="rating-button">
        <input type="radio" bind:group={rating} value={5} id="rb5">
        <label for="rb5">5</label>
      </li>
     
    </ul>
    <input type="submit" value="submit" on:click|preventDefault={handleSubmit} disabled={!rating}>
  </div>

{/if}

{#if ratingSubmitted}
  <div id="thanks" class="card centered">
    <img alt="thank-you" src={thankYou}>
    <span class="highlight">
      You selected {rating} out of 5
    </span>
    <h1>
      Thank you!
    </h1>
    <article class="txtcent">
      We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!
    </article>
  </div>
{/if}
 

<style>
.centered{
  display: flex;
  flex-direction: column;
  align-items: center;
}


.card{
  background-color: var(--bg-color-component);
  font-weight: var(--font-4);
  color: var(--color-grey-light);
  max-width: min(90vw, 30rem);
  padding: 2rem;
  border-radius: 1rem;
}
img{
  margin-top: .5rem;
  margin-bottom: 2rem;
}
.icon{
  background-color: hsl(213, 19%, 22%);
  border-radius: 100%;
  padding: 1rem;
}

.card h1 {
  color: var(--color-white);
  margin-bottom: 1rem;
  font-weight: var(--font-4);
}

.card article{
  line-height: 1.5rem;
  margin-bottom: 1rem;
  font-size:15px;
}
 .rating{
   margin: 2rem auto;
   display:flex;
   justify-content: space-between;
   align-items: center;
   list-style: none;
 }
 .rating-button{
    position: relative;
    background:hsl(213, 19%, 22%);
    width: 3rem;
    height: 3rem;
    padding: 1rem;
    text-align: center;
    border-radius: 50%;
 }

 .rating input [type=radio]{
   height: 100%
 }
 .rating label{
  position: absolute;
    top: 50%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    padding: 1rem;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
 }

   .rating-button:hover {
    background: var(--bg-color-brand);
    color: #fff;
  }
  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }
  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: var(--color-grey-light);
    color: #fff;
  }

 .card input[type=submit]{
   width: 100%;
   background-color: var(--bg-color-brand);
   border: none;
   border-radius: 200px;
   padding: .75rem;
   color: var(--color-white);
   text-transform: uppercase;
   letter-spacing: 0.1rem;
   font-weight: var(--font-4);
   font-size:1rem
 }
 .card input[type=submit]:hover{
   background-color: var(--color-white);
   color: var(--bg-color-brand);
 }
 .highlight{
  background:hsl(213, 19%, 22%);
  color: var(--bg-color-brand);
  padding: .5rem 1rem;
  border-radius: 10rem;
  margin-bottom: 2.5rem;
 }
 .txtcent{
   text-align: center;
   margin: 0 0.75rem
 }
</style>
