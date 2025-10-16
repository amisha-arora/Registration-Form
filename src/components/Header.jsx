import logo from "../assets/logo.png";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="200" height="70" />
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#" padding="20">About</a>
        <a class="nav-link" href="#">Pages</a>
        <a class="nav-link" href="#">Services</a>
        <a class="nav-link" href="#">Project</a>
        <a class="nav-link" href="#">Blog</a>
        <a class="nav-link" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Header;