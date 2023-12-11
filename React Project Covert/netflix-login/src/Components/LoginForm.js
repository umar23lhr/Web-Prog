import React from 'react'

export default function LoginForm() {
  return (
    <div class="form-r">
        <h2>Sign In</h2>
        <form action="#">
            <div class="fc">
                <input type="text" required/>
                <label>Email or phone number</label>
            </div>
            <div class="fc">
                <input type="password" required/>
                <label>Password</label>
            </div>
            <button type="submit">Sign In</button>
            <div class="form-help"> 
                <div class="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">Remember me</label>
                </div>
                <a href="#">Need help?</a>
            </div>
        </form>
        <p>New to Netflix? <a href="#">Sign up now</a></p>
        <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="#">Learn more.</a>
        </small>
    </div>
  );
}
