import React from 'react'
import '../assets/css/Footer.css'

export default function Footer() {
  return (
    <div>
    <footer class="footer-distributed">

<div class="footer-left">

    <h3><span>Agro FundX</span></h3>

    <p class="footer-links">
        <a href="#" class="link-1">Home</a>
    
        <a href="#">About</a>
        
        <a href="#">Contact</a>
    </p>

    <p class="footer-company-name">Agro FundX © 2023</p>
</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>444 Agro FundX</span> kuniyamuthur , coimbatore</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 9677904185</p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="/">agrofundx@gmail.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About  Agro FundX site</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    {/* <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div> */}

</div>

</footer>
</div>
)
}
