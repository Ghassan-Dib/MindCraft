import React from 'react';

function SubscribeForm() {
  return (
    <form className="content__subscribe__inputs">
      <input type="email" id="email" name="email" placeholder="Your Email" required />
      <button>Subscribe</button>
    </form>
  );
}

export default SubscribeForm;
