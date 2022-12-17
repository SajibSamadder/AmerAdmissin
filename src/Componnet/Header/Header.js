import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import headerLogo from '../../img/logo.png'
import $ from "jquery";
import "./header.css"
// import "../../js/bootstrap.min.js"


function Header() {
    const ele = useRef(null)
    useEffect(() => {
        let hide_megamanu = $(".hide_megamanu")
        const manu_li = $(".manu_item")
        manu_li.on("click", function (e) {
            manu_li.each(function () {
                $(this).removeClass("active")
            });
            $(this).toggleClass("active")
            hide_megamanu.css("display", "block");
        });
        hide_megamanu.on("click", e => {
            e.target.style.display = "none"
            manu_li.each(function () {
                $(this).removeClass("active")
            });
        })
    }, [])
    return (
        <section>
            <div className='hide_megamanu'></div>
            <header className='header'>
                <div className="container position-relative">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="header_logo w-20">
                            <a href="#">
                                <img src={headerLogo} alt="" />
                            </a>
                        </div>
                        <div className="header_manu w-60 animate__backOutDown">
                            <nav >
                                <ul className='d-flex manu_ul' id='#menuElem'>
                                    <li className='manu_item'>
                                        <a href="#">Home</a>
                                    </li>
                                    <li className='manu_item'>
                                        <a href="#" className='active'>Home</a>
                                        <div className="pane">
                                            <ul className="pane-section">
                                                <div className="row d-flex ">
                                                    <div className="col-lg-3">
                                                        <div className="nav nav-tabs ">
                                                            <button className="nav-link active" id="home-1" data-bs-toggle="tab" data-bs-target="#mega-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                                            <button className="nav-link" id="home-2" data-bs-toggle="tab" data-bs-target="#mega-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                                            <button className="nav-link" id="home-3" data-bs-toggle="tab" data-bs-target="#mega-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                                                        </div>
                                                    </div>
                                                    <div className="tab-content col-lg-9">
                                                        <div className="tab-pane fade show active" id="mega-home" aria-labelledby="home-1">
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <li className="mega_children">
                                                                        <a href="#">Outbound</a>
                                                                        <ul className="pane-children">
                                                                            <li>
                                                                                <a href="#">Lead Generation</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Appointment Setting</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Event Marketing</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Lead Qualification/Nurture</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="mega_children">
                                                                        <div className="mega_children_left">
                                                                            img
                                                                        </div>
                                                                        <div className="mega_children_right">
                                                                            <h2>Mega Children</h2>
                                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="mega-profile" aria-labelledby="home-2">
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <div className="mega_tile">
                                                                        <h3>Telemarketing2</h3>
                                                                        <p>Summary about Telemarketing, excepteur sint occaecat cupidatat no proident, sunt in culpa qui officiaa deserunt </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="mega_children">
                                                                        <div className="mega_children_left">
                                                                            img
                                                                        </div>
                                                                        <div className="mega_children_right">
                                                                            <h2>Mega Children</h2>
                                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="mega-contact" aria-labelledby="home-3">
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <div className="mega_children">
                                                                        <div className="mega_children_left">
                                                                            img
                                                                        </div>
                                                                        <div className="mega_children_right">
                                                                            <h2>Mega Children</h2>
                                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <li className="mega_children">
                                                                        <a href="#">Inbound</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Call Handling</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Lead Management</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='manu_item'>
                                        <a href="#" className='active'>Home</a>
                                        <div className="pane ">
                                            <ul className="pane-section">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="mega_children">
                                                            <div className="mega_children_left">
                                                                img
                                                            </div>
                                                            <div className="mega_children_right">
                                                                <h2>Mega Children</h2>
                                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="mega_children">
                                                            <div className="mega_children_left">
                                                                img
                                                            </div>
                                                            <div className="mega_children_right">
                                                                <h2>Mega Children</h2>
                                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="mega_children">
                                                            <div className="mega_children_left">
                                                                img
                                                            </div>
                                                            <div className="mega_children_right">
                                                                <h2>Mega Children</h2>
                                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='manu_item'>
                                        <a href="#" className='active'>Home</a>
                                        <div className="pane ">
                                            <ul className="pane-section">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="mega_tile">
                                                            <h3>Telemarketing3</h3>
                                                            <p>Summary about Telemarketing, excepteur sint occaecat cupidatat no proident, sunt in culpa qui officiaa deserunt </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="mega_children">
                                                            <div className="mega_children_left">
                                                                img
                                                            </div>
                                                            <div className="mega_children_right">
                                                                <h2>Mega Children</h2>
                                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                            </div>
                                                        </div>
                                                        <div className="mega_children">
                                                            <div className="mega_children_left">
                                                                img
                                                            </div>
                                                            <div className="mega_children_right">
                                                                <h2>Mega Children</h2>
                                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="mega_children">
                                                            <div className="mega_children_left">
                                                                img
                                                            </div>
                                                            <div className="mega_children_right">
                                                                <h2>Mega Children</h2>
                                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                            </div>
                                                        </div>
                                                        <div className="mega_children">
                                                            <div className="mega_children_left">
                                                                img
                                                            </div>
                                                            <div className="mega_children_right">
                                                                <h2>Mega Children</h2>
                                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse suscipit modi libero vero neque veritatis, minima earum quos quod!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='manu_item'>
                                        <a href="#">Home</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header_login w-20 ">
                            <div className="header_login_wrapper text-end">
                                <a href="#">Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}
export default Header