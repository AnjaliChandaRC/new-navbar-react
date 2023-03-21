import LogoImg from "../assets/images/svg/logo.svg";
const Header = () => {
  const handldeOverlayActive = () => {
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("active-nav-overlay");
  };

  return (
    <>
      <nav className="py-4 w-100 position-relative bg-black">
        <div className="d-none d-lg-block">
          <div className="container modified_container d-flex justify-content-between align-items-center position-relative">
            <a href="/">
              <img src={LogoImg} alt="logo" />
            </a>
            <ul className="list-unstyled d-flex align-items-center justify-content-center m-0 pe-3">
              <li className="me-4 pe-3">
                <a
                  href="/"
                  className="text-decoration-none nav_items me-1"
                >
                  Home
                </a>
              </li>
              <li className="me-4 pe-3">
                <a
                  href="#about-us"
                  className="text-decoration-none nav_items me-1"
                >
                  About us
                </a>
              </li>
              <li className="me-4 pe-3">
                <a
                  href="#products"
                  className="text-decoration-none nav_items me-1"
                >
                  Products
                </a>
              </li>
              <li className="me-4pe-3">
                <a
                  href="#contact-us"
                  className="text-decoration-none nav_items me-1"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <div className="container">
            <div className="py-lg-2 d-flex justify-content-between align-items-center position-relative ">
              <a href="/">
                <img src={LogoImg} alt="logo" />
              </a>
              <div
                id="nav-icon1"
                className={`hamburger-menu z_index_one`}
                onClick={() => handldeOverlayActive()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className={`navbar-overlay`}>
            <ul className="h-100 list-unstyled d-flex flex-column justify-content-center align-items-center m-0">
              <li onClick={() => handldeOverlayActive()} className="pt-5">
                <a
                  href="#home"
                  className="text-decoration-none nav_items"
                >
                  Home
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()} className="">
                <a
                  href="#about-us"
                  className="text-decoration-none nav_items"
                >
                  About us
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()} className="">
                <a
                  href="#products"
                  className="text-decoration-none nav_items"
                >
                  Products
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()} className="">
                <a
                  href="#contact-us"
                  className="text-decoration-none nav_items"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
