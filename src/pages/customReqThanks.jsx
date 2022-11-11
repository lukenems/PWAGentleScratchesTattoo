import { Link } from "wouter/preact";

const CustomReqThanks = () => {

  return (
    <>
    <div>
      <h1>Thank you for requesting a custom tattoo!</h1>
      <h2>Here's what happens next:</h2>
      <ul>
        <li><h3>I will look over your requested designs and reach out to go over details</h3></li>
        <li><h3>We decide on final design including size and price</h3></li>
        <li><h3>Once all that is decided, book your tattoo using the 'Book it' button, pay your deposit and we'll see you at the appointment!</h3></li>
      </ul>
    </div>
    <div>
      <h3>Checkout my Instagram for my latest Flash</h3>
      <h3><a href="https://www.instagram.com/gentlescratches/?hl=en"></a></h3>
      <h1><Link to="/">Back to Homepage</Link></h1>
    </div>
    </>
  )
}

export default CustomReqThanks;