import React from 'react'

const Footer = () => {
  return <div>

    <footer className="bg-dark text-center text-white">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
          ><i class="bi bi-facebook"></i></a>

          {/* <!-- Twitter --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
          ><i class="bi bi-twitter"></i></a>

          {/* <!-- Google --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
          ><i class="bi bi-google"></i></a>

          {/* <!-- Instagram --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
          ><i class="bi bi-instagram"></i></a>

          {/* <!-- Linkedin --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
          ><i class="bi bi-linkedin"></i></a>

          {/* <!-- Github --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
          ><i class="bi bi-github"></i></a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        {/* © 2020 Copyright: */}
        <a className="text-white" href="/">Copyright © Your Website 2023</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  </div>
}

export default Footer