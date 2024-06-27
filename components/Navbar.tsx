"use client";
import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
  Image,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { fontSatisfy } from "@/config/fonts";
import { SearchIcon, ShoppingCartIcon, ChevronDown } from "./Icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
  ];
  return (
    <NextUINavbar
      isBordered
      className="flex justify-around py-1 bg-blue-400 md:px-28"
      maxWidth="full"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="#" aria-current="page">
            <Image width={176} height={24} src={"/CeltTrade.svg"} alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarContent className="hidden sm:flex gap-4">
          <NavbarItem>
            <Link href="#" className="text-white ">
              Home
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className=" text-white p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<ChevronDown />}
                  radius="sm"
                  variant="light"
                >
                  Products
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Electronic"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="Smartphones"
                description="Explore our latest collection of Smartphones with cutting-edge technology."
              >
                Smartphones
              </DropdownItem>
              <DropdownItem
                key="PC/Laptop"
                description="Find high-performance PCs and Laptops for all your computing needs."
              >
                PC/Laptop
              </DropdownItem>
              <DropdownItem
                key="Smartwatch"
                description="Discover the newest Smartwatches with advanced features and stylish designs."
              >
                Smartwatch
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link href="/about" className="text-white ">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white ">Pricing</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <SearchIcon size={24} className="text-white" />
          <NavbarMenuToggle
            icon={<ShoppingCartIcon size={24} />}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="h-full w-3/12"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  );
};
