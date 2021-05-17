import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import index from '../pages/index';
import about from '../pages/about';
import tech from '../pages/tech';
import misc from '../pages/misc';

function Navbar() {
    return (
        <>
            <head className="header">
                <a href="#" className="logo">LOGO</a>
                <nav>
                    <ul className="menu-items">
                        <li><a href="#" className="menu-item">Home</a></li>
                        <li className="dropdown">
                            <a href="#" className="menu-item">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li> <Link href="index" className="menu-item">Home</Link></li>
                                <li> <Link href="tech" className="menu-item">Technology</Link></li>
                                <li> <Link href="misc" className="menu-item">Miswcelleanous</Link></li>    
                                <li> <Link href="about" className="menu-item">About Us</Link></li>
                              
                                <li className="dropdown dropdown-right">
                                    <a href="#" className="menu-item"> Item 3
                                 <i className="fas fa-angle-right"></i>
                                    </a>
                                    <ul className="menu-right">
                                        <li><a href="#" className="menu-item">Item 3.1</a></li>
                                        <li><a href="#" className="menu-item">Item 3.2</a></li>
                                        <li><a href="#" className="menu-item">Item 3.3</a></li>
                                        <li><a href="#" className="menu-item">Item 3.4</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="menu-item">Item 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="menu-item">Mega Menu</a>
                            <div className="mega-menu">
                                <div className="content">
                                    <div className="col">
                                        <section>
                                            <h2>Featured 1</h2>
                                            <a href="#" className="img-wrapper" >
                               <span className="img"  >
                               <Image src="/la.jpg" alt="Random image" height={1200} width={1200} />
                                 </span></a>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 2</h2>
                                            <ul className="mega-links">
                                                <li><a href="#">Item 1</a></li>
                                                <li><a href="#">Item 2</a></li>
                                                <li><a href="#">Item 3</a></li>
                                                <li><a href="#">Item 4</a></li>
                                                <li><a href="#">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 3</h2>
                                            <ul className="mega-links">
                                                <li><a href="#">Item 1</a></li>
                                                <li><a href="#">Item 2</a></li>
                                                <li><a href="#">Item 3</a></li>
                                                <li><a href="#">Item 4</a></li>
                                                <li><a href="#">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 4</h2>
                                            <ul className="mega-links">
                                                <li><a href="#">Item 1</a></li>
                                                <li><a href="#">Item 2</a></li>
                                                <li><a href="#">Item 3</a></li>
                                                <li><a href="#">Item 4</a></li>
                                                <li><a href="#">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="menu-item">Blog</a>
                            <div className="mega-menu blog">
                                <div className="content">
                                    <div className="col">
                                        <a href="#" className="img-wrapper"
                                        ><span className="img"
                                        ><Image src="/la.jpg"  alt="Random Image"  height={1200} width={1200}  />
                                        /></span
                                            ></a>
                                        <h2>Title</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                                            quibusdam deserunt quis.
                  </p>
                                        <a href="#" className="read-more">read more...</a>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="img-wrapper"
                                        ><span className="img"
                                        >  <Image src="/la.jpg" alt="Los Angeles"   height={1200} width={1200}  /></span
                                            ></a>
                                        <h2>Title</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                                            quibusdam deserunt quis.
                  </p>
                                        <a href="#" className="read-more">read more...</a>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="img-wrapper"
                                        ><span className="img"
                                        > <Image src="/la.jpg" alt="Los Angeles"   height={1200} width={1200}  /></span ></a>
                                        <h2>Title</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                                            quibusdam deserunt quis.
                  </p>
                                        <a href="#" className="read-more">read more...</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#" className="menu-item">About</a></li>
                    </ul>
                </nav>
            </head>
        </>
    )
}

export default Navbar