/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import React from "react"
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react"

export default function NavbarSection() {
  return (
    <section className="public_navbar_container bg-BrightBlue lg:bg-white">
      <Navbar
        fluid
        className="max-w-[1440px] bg-BrightBlue lg:bg-white mx-auto px-4 md:px-6 py-5 "
      >
        {/* navbar toggle */}
        <Navbar.Toggle
          className="block md:block lg:hidden navbar_toggle"
          onClick={() => {
            document
              .getElementsByClassName("navbar_collapse")[0]
              .classList.toggle("hidden")
            document
              .getElementsByClassName("navbar_collapse")[0]
              .classList.toggle("md:hidden")
          }}
        />
        {/* logo */}
        <Link href="/" className="order-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="41"
            viewBox="0 0 34 41"
            fill="none"
            className="fill-white lg:fill-BrightBlue"
          >
            <path d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z" />
          </svg>
        </Link>
        {/* search, cart, account(user) */}
        <div className="flex items-center gap-3 md:gap-5 md:order-2 ml-auto order-3 lg:order-last">
          {/* Search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            className="cursor-pointer fill-white lg:fill-black"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M4.95072 2.99141C3.79204 4.14838 3.11812 5.70363 3.06631 7.34023C3.0145 8.97682 3.58868 10.5716 4.67185 11.7995C5.75503 13.0275 7.26567 13.7962 8.89594 13.9491C10.4965 14.0991 12.0941 13.6444 13.3749 12.6766L16.7061 16.0085L16.7061 16.0085C16.789 16.0914 16.8873 16.1571 16.9955 16.2019C17.1038 16.2468 17.2198 16.2698 17.3369 16.2698C17.4541 16.2698 17.5701 16.2468 17.6783 16.2019C17.7866 16.1571 17.8849 16.0914 17.9678 16.0085C18.0506 15.9257 18.1163 15.8274 18.1611 15.7191C18.206 15.6109 18.229 15.4949 18.229 15.3777C18.229 15.2606 18.206 15.1446 18.1611 15.0363C18.1163 14.9281 18.0506 14.8298 17.9678 14.7469L17.9677 14.7469L14.636 11.416C15.6013 10.135 16.0539 8.53846 15.903 6.93943C15.7493 5.31054 14.9808 3.80139 13.7539 2.719C12.5269 1.63662 10.9337 1.06232 9.29838 1.11292C7.66303 1.16352 6.10838 1.83523 4.95072 2.99141ZM4.95072 2.99141L5.02138 3.06217L4.95072 2.99141ZM12.7887 4.25366C13.2263 4.68416 13.5743 5.19703 13.8127 5.76269C14.051 6.32835 14.175 6.93561 14.1775 7.54944C14.18 8.16327 14.061 8.77152 13.8272 9.3391C13.5935 9.90669 13.2497 10.4224 12.8156 10.8564C12.3816 11.2905 11.8659 11.6343 11.2983 11.868C10.7307 12.1018 10.1225 12.2208 9.50865 12.2183C8.89482 12.2158 8.28756 12.0918 7.7219 11.8535C7.15623 11.6151 6.64336 11.2671 6.21287 10.8295C5.35255 9.95509 4.87263 8.77613 4.87762 7.54944C4.88262 6.32275 5.37213 5.14773 6.23954 4.28033C7.10694 3.41292 8.28196 2.92341 9.50865 2.91841C10.7353 2.91342 11.9143 3.39335 12.7887 4.25366Z"
              stroke="black"
              stroke-width="0.2"
            />
          </svg>
          {/* cart  */}
          <div className="relative cursor-pointer">
            <p className="bg-white lg:bg-BrightBlue rounded-full text-BrightBlue lg:text-white w-[18px] h-[18px] text-xs absolute top-[-9px] flex justify-center items-center font-semibold right-[-4px]">
              <span>2</span>
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className=" fill-white lg:fill-black"
            >
              <path d="M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z" />
            </svg>
          </div>
          {/* User */}
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        {/* Navbar collapse */}
        <Navbar.Collapse className="navbar_collapse md:hidden lg:block bg-GreyLightChateau lg:bg-transparent bg-opacity-20 pl-4 lg:pl-0 py-6 lg:py-0 lg:order-2 ">
          <li>
            <Link href="/">Laptops</Link>
          </li>
          <li>
            <Link href="/">Desktop PCs</Link>
          </li>
          <li>
            <Link href="/">Networking Devices</Link>
          </li>
          <li>
            <Link href="/">Printers & Scanners</Link>
          </li>
          <li>
            <Link href="/">All Other Products</Link>
          </li>
          <li>
            <Link href="/">Repairs</Link>
          </li>
          <li>
            <Link href="/">
              <button className="relative inline-flex items-center justify-center py-2 px-6 border-2 lg:border-BrightBlue rounded-3xl overflow-hidden text-sm font-medium text-gray-900 ">
                <span className="relative transition-all ease-in duration-75 text-white lg:text-BrightBlue font-bold">
                  Our Deals
                </span>
              </button>
            </Link>
          </li>
        </Navbar.Collapse>
      </Navbar>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="2"
        className="w-full"
        viewBox="0 0 1920 2"
        fill="none"
      >
        <path d="M0 1L1920 0.999832" stroke="#CACDD8" />
      </svg>
    </section>
  )
}
