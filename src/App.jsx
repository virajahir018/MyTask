import "./App.css";

import {
  FaClipboardCheck,
  FaBootstrap,
  FaHtml5,
  FaReact,
  FaDownload,
  FaFileAlt,
  FaUserTie,
} from "react-icons/fa";

import {
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
} from "react-icons/si";

const templates = [
  {
    title: "Mytask - Bootstrap5 Dashboard Admin Template",
    tech: "Bootstrap",
    dashboard: "2 Option",
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-html.png",
    comingSoon: true,
    backgroundColor: "#7c80be"
  },
  {
    title: "Mytask - React Redux Project Management",
    tech: "React",
    dashboard: "2 Option",
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-react.png",
  },
  {
    title: "Mytask - Laravel Project Management Admin",
    tech: "Laravel",
    dashboard: "2 Option",
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-laravel.png",
  },
  {
    title: "Mytask - Html Hr Project Management Admin",
    tech: "HTML",
    dashboard: "2 Option",
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-html.png",
  },
];

const services = [
  {
    icon: <FaFileAlt />,
    title: "Project Management",
    desc: "Project management is more than a to-do list. It means tracking tasks from beginning to end, delegating subtasks to teammates, and setting deadlines to make sure projects get done on time.",
  },
  {
    icon: <FaUserTie />,
    title: "Hr Management",
    desc: "Hr management is the practice of managing people to achieve better performance.if you hire people into a business, you are looking for people who fit the company culture as they will be happier.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Task Board",
    desc: "The board allows to improve workflow visibility and ensures efficient diffusion of information relevant to the whole team. It helps team members to see their progress at a glance.",
  },
];

const workFeatures = [
  "Projects Management",
  "Task Management",
  "Project Timesheet",
  "Tickets Detail",
  "Attendance Detail",
  "Employees View",
  "Leave Request",
  "Clients List",
  "Calendar Events",
  "Chat List",
  "Contact",
];

const features = [
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/icon-laravel.svg",
    title: "Laravel 8",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/bootstrap.png",
    title: "Bootstrap 5x",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/boilerplat.svg",
    title: "Boilerplate",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React.png",
    title: "React",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React_BS.png",
    title: "React Bootstrap",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React_Router.png",
    title: "React Router",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React_i18n.png",
    title: "React i18n",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/authorization.svg",
    title: "Authorization",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/user-managment.svg",
    title: "User Management",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/role-managment.svg",
    title: "Role Management",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/skeleton.svg",
    title: "Skeleton",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/w3c.png",
    title: "W3C Validated",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/sass.png",
    title: "Sass",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/responsive.png",
    title: "Fully Responsive",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    title: "IcoFont",
  },
  {
    image: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/color.png",
    title: "Dark / Light Version",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
    title: "Cross Browser",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    title: "Google Font",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png",
    title: "Easy to Use",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2972/2972531.png",
    title: "High Performance",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png",
    title: "Fully Customizable",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2989/2989988.png",
    title: "Well Documented",
  },
];

const testimonials = [
  {
    image:
      "https://pixelwibes.com/template/my-task/react/marketing/assets/img/envato.png",
    text: "Superb product and very responsive customer care support by the PixelWibes team.",
    name: "jimmyturner5092",
    location: "Italy, Member since November 2022",

  },
  {
    image:
      "https://pixelwibes.com/template/my-task/react/marketing/assets/img/envato.png",
    text: "Most impressive for me when I show dynamic HTML structure. clean, examples, everything. This is such good quality.",
    name: "Skylinktechnolab",
    location: "Italy, Member since November 2015",
  },
];


function App() {
  return (
    <>
      <div className="hero-section">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand logo" href="#">
              <FaClipboardCheck className="me-2" />
              My-Task
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Features
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Authorization
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Apps
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Why
                  </a>
                </li>

                <li className="nav-item ms-lg-3">
                  <button className="btn contact-btn">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h1 className="hero-title">
                My-Task Hr & Project
                <br />
                Management
                <br />
                System
              </h1>

              <p className="hero-text">
                This is a solution for everyone. Although it is at the heart of
                Scrum and is typically used by software development teams, it
                can be successfully applied to other businesses.
              </p>

              <h4 className="tech-title">Technology :</h4>

              <div className="tech-icons">
                <div className="icon-circle">
                  <FaBootstrap className="bootstrap" />
                </div>

                <div className="icon-circle">
                  <FaHtml5 className="FaHtml5"/>
                </div>

                <div className="icon-circle">
                  <SiJavascript className="SiJavascript" />
                </div>

                <div className="icon-circle">
                  <SiLaravel className="SiLaravel" />
                </div>

                <div className="icon-circle">
                  <FaReact className="FaReact"/>
                </div>

                <div className="icon-circle">
                  <SiNextdotjs  className="SiNextdotjs"/>
                </div>
              </div>

              <button className="download-btn">
                <FaDownload />
              </button>
            </div>

            <div className="col-lg-7 text-center">
              <img
                src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/hero/hero-img.png"
                alt="Dashboard"
                className="dashboard-img img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="chat-btn">💬</div>
      </div>

      {/* Templates Section */}
      <section className="templates-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Range of Templates</h2>
            <p className="text-muted">
              Lifetime Update are offered for all My-Task.
            </p>
          </div>

          <div className="row g-3">
            {templates.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card shadow-sm h-100 border-0" style={{ backgroundColor: item.backgroundColor }}>
                  <div className="position-relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top "
                    />

                    {item.comingSoon && (
                      <div className="position-absolute top-50 start-50 translate-middle text-white fw-bold  size-7">
                        COMING SOON
                      </div>
                    )}
                  </div>

                  <div className="card-body">
                    <h6 className="fw-bold">{item.title}</h6>

                    <div className="row mt-3">
                      <div className="col-6">
                        <small>Technology</small>
                        <p>{item.tech}</p>
                      </div>

                      <div className="col-6">
                        <small>Dashboard</small>
                        <p>{item.dashboard}</p>
                      </div>
                    </div>

                    <small>Updated</small>
                    <p>Life Time Free</p>

                    <div className="d-flex gap-2 mt-3">
                      <button className="btn btn-secondary btn-sm">
                        View Demo
                      </button>

                      <button className="btn btn-secondary btn-sm">
                        Buy License
                      </button>
                    </div>

                    <button className="btn btn-secondary btn-sm mt-2">
                      Buy Extended License
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="management-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="section-title">
              Our Management System
            </h1>
            <p className="section-subtitle">
              Apps for anywhere
            </p>
          </div>

          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="management-card">
                  <div className="service-icon">
                    {item.icon}
                  </div>

                  <h2>{item.title}</h2>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="scroll-btn">
          ↑
        </button>
      </section>



      <section className="future-work py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="future-title">
              This is the Future of Work.
            </h2>
            <p className="future-subtitle">
              All Our work in one place
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="feature-list">
                {workFeatures.map((item, index) => (
                  <div
                    key={index}
                    className={`feature-item ${index === 0 ? "active-feature" : ""
                      }`}
                  >
                    <span className="feature-number">
                      {String(index + 1).padStart(2, "0")} :
                    </span>

                    <span className="feature-text">
                      {item}
                    </span>

                    {index === 0 && (
                      <div className="feature-line"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-8 text-center">
              <img
                src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-7.png"
                alt="Project"
                className="img-fluid future-image"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="role-section">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="role-title">
              Laravel Authorization & Roles Management
            </h2>
            <p className="role-subtitle">
              Best Feature Available in My-Task App
            </p>
          </div>

          <div className="tabs-menu">
            <button className="tab-btn active">Login</button>
            <button className="tab-btn">User Management</button>
            <button className="tab-btn">Role Management</button>
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-lg-5">
              <h2 className="content-title">
                Role Management
              </h2>

              <p>
                In many web projects, we have different user roles interacting with
                the system. Each role has its own permission.
                Every feature of the system can be enabled or disabled for these
                roles.
              </p>
              <p>
                We can define users permissions in our codes and check if they are
                authorized to do the requested action or not.
                A better way is to create a role and authorization management system.
              </p>

            </div>

            <div className="col-lg-7 text-center">
              <img
                src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/role/login.png"
                alt="Role Management"
                className="img-fluid role-img"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="why-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose My-Task</h2>
            <p className="text-muted">
              Best Feature Available in My-Task App
            </p>
          </div>

          <div className="row justify-content-center">
            {features.map((item, index) => (

              <div className="col-lg-2 col-md-3 col-6 mb-4" key={index}>
                <div className="feature-box text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="feature-img"
                  />
                  <h6 className="mt-3">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="testimonial-title">
              Testimonials from Our Valued
              <br />
              Customers
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {testimonials.map((item, index) => (
              <div className="col-lg-6  " key={index}>
                <div className="testimonial-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-logo"
                  />

                  <p className="testimonial-text">
                    {item.text}
                  </p>

                  <h5 className="testimonial-name">
                    {item.name}
                  </h5>

                  <p className="testimonial-location">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-section py-5">
        <div className="container-fluid">
          <div className="row align-items-center position-relative">

            <div className="col-lg-3 text-center mb-4">
              <img
                src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/pages/my-task-mobile.png"
                alt="HR Dashboard"
                className="img-fluid dashboard-img"
              />
            </div>

            <div className="col-lg-7   text-center mb-5 ">
              <img
                src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/pages/project-dashboard.png"
                alt="Project Dashboard"
                className="img-fluid dashboard-img"
              />
            </div>

            <div className="col-lg-4 py-5 position-absolute end-0 ba bg-light rounded-3">
              <div className="content-box">
                <h1 className="title">
                  Ready to Use Apps For Your Dashboard
                </h1>

                <p className="description">
                  Including multiple ready to use apps like Project
                  Management, HR Management, Task Management, Chat App,
                  Time Sheet, Employees and more.
                </p>

                <ul className="feature-list">
                  <li>Dark/Light Option</li>
                  <li>Fully Responsive</li>
                  <li>Easy to Customized</li>
                </ul>

                <div className="slider-btns">
                  <button>{"<"}</button>
                  <button>{">"}</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="row gy-4">

            <div className="col-lg-5">
              <div className="footer-logo">
                <span className="logo-icon">
                  <img
                    src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/logo/logo-color.svg"
                  />
                </span>
                <h2>My-Task</h2>
              </div>

              <p className="footer-text">
                Pixelwibes is the world's leading community
                for creatives to share, grow, and get hired.
              </p>

              <h4 className="brand-name">Pixelwibes.</h4>

              <div className="rating">
                <span>4.5</span>

                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>

                <span className="ms-2">Reviews</span>
              </div>

              <div className="social-icons">
                <i className="bi bi-globe"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>

            <div className="col-lg-2">
              <h4 className="fs-6 text-muted">COMPANY</h4>
              <ul className="footer-list">
                <li>Hire Developer</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h4 className="fs-6 text-muted">SERVICES</h4>
              <ul className="footer-list">
                <li>WEB Technologies</li>
                <li>Cross Platform Apps</li>
                <li>Frontend Technologies</li>
                <li>UI/UX & Design</li>
                <li>BlockChain</li>
              </ul>
            </div>

            <div className="col-lg-2">
              <h4 className="fs-6 text-muted">Templates</h4>
              <ul className="footer-list">
                <li>Qboat</li>
                <li>Cryptoon</li>
                <li>Ebazar</li>
                <li>Ihealth</li>
                <li>e-Learn</li>
                <li>Timetracker</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container d-flex justify-content-between flex-wrap">
            <p>Designed and Developed by Pixelwibes</p>

            <div>
              <span className="me-4">Terms of use</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;