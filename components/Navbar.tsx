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
  Image,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
  Badge,
} from "@nextui-org/react";
import { useAppSelector } from "@/lib/hooks";
import { ShoppingCartIcon, ChevronDown } from "./Icons";
import { RootState } from "@/lib/store";
import CartModal from "./CartModal";

export const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { items } = useAppSelector((state: RootState) => state.cart);
  const cartItemCount = items.length;

  const toggleCartModal = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <NextUINavbar
        isBordered
        className="flex justify-around py-1 bg-blue-400 md:px-28"
        maxWidth="full"
        position="sticky"
      >
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <Link href="/" aria-current="page">
              <Image
                width={176}
                height={24}
                src={"/CeltTrade.svg"}
                alt="Logo"
              />
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
          <NavbarItem>
            <Button onClick={toggleCartModal} className="text-white bg-inherit">
              <Badge
                content={cartItemCount}
                size="sm"
                shape="rectangle"
                showOutline={false}
                color="danger"
                isInvisible={cartItemCount === 0}
              >
                <ShoppingCartIcon className="w-6 h-6" />
              </Badge>
            </Button>
          </NavbarItem>

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
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </NextUINavbar>
      <CartModal isOpen={isCartOpen} onClose={toggleCartModal} />
    </>
  );
};
