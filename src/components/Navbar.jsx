import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">My Movies</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">About</a>
        </li>
      </ul>
     <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar