import React from "react";
import styled from "styled-components";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Logo1 from "../assets/codex.png"
import Logo2 from "../assets/codex-black.png"
import { GoBook } from "react-icons/go";

const navListMenuItems1 = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
];
const navListMenuItems2 = [
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
];

function NavListMenu({head, no, bg, bg1}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems1 = navListMenuItems1.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
              style:{color: bg1.slice(5)}
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className={`flex items-center text-sm font-bold`}
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className={`text-xs !font-medium text-blue-gray-500`}
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
  const renderItems2 = navListMenuItems2.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
              style:{color: bg1.slice(5)}
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className={`flex items-center text-sm font-bold`}
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className={`text-xs !font-medium text-blue-gray-500`}
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 font-medium text-lg ${bg} hover:text-[#00ffff]`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {head}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className={`grid grid-cols-2 gap-y-2 outline-none outline-0 ${bg1}`}>
            {no == 1 ? renderItems1 : renderItems2}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen} className={bg1}>{no == 1 ? renderItems1 : renderItems2}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({bg, bg1}) {
  return (
    <List className={`mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ${bg}`}>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 text-lg hover:text-[#00ffff]`}>Home</ListItem>
      </Typography>
      <NavListMenu head={"Pages"} no={"1"} bg={bg} bg1={bg1}/>
      <NavListMenu head={"Sections"} no={"2"} bg={bg} bg1={bg1}/>
      <NavListMenu head={"Icons"} no={"1"} bg={bg} bg1={bg1}/>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-lg hover:text-[#00ffff]">
          <a href="#footer">Contact Us</a>
        </ListItem>
      </Typography>
    </List>
  );
}

export function MaterialNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const [color, setColor] = React.useState(false)
  const changeColor = () => {
    let bodyTopPos = window.scrollY;
    if(bodyTopPos >= 130){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)
  const bg = color ? "text-black" : "text-white"
  const bg1 = "text-black"
  return (
    <Wrapper>
      <Navbar id="nav" className={`mx-auto px-20 py-2 sticky w-full z-20 top-0 start-0 end-0 ${color ? "bg-white" : openNav ? "bg-black" : "bg-transparent shadow-none"}`} style={{borderRadius: "0px", border: "none", position: "fixed", top: "0", right: "0", left: "0", transition: "background-color 0.35s linear"}}>
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="#"><img src={color ? Logo2 : Logo1} class="h-[4.5rem]" alt="Codex Logo" href="#"/></a>
          <div className="hidden lg:block">
            <NavList 
            bg={bg}
            bg1={bg1}
            />
          </div>
          <div className="btns hidden gap-2 lg:flex text-black">
            <Button variant="text" size="sm" color="blue-gray" className={`text-base ${bg} font-medium`}>
              <a href="#about">GET STARTED</a>
            </Button>
            <Button id="courses" variant="gradient" size="sm" className="text-black text-base bg-[#00FFFF] font-medium normal-case transform transition duration-500 hover:scale-110">
              <GoBook size={24} style={{marginRight: "7px"}}/> 
              <a href="#tech">My Courses</a>
            </Button>
          </div>
          <IconButton
            variant="text"
            color={color ? "black" : "white"}
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav} style={{borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}>
          <NavList bg={bg} bg1={bg}/>
          <div className={`btns flex w-full flex-nowrap items-center gap-2 lg:hidden ${bg}`}>
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth className={`text-base border-${bg.slice(5)} font-medium`}>
                GET STARTED
            </Button>
            <Button id="courses-md" variant="gradient" size="sm" fullWidth className="text-black text-base bg-[#00FFFF] font-medium transform transition duration-500 hover:scale-110">
              <GoBook size={24} style={{marginRight: "7px"}}/>My Courses
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .btns > #courses{
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
  }
  .btns > #courses-md{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 600px){
      #nav{
        padding-left: 2rem;
        padding-right: 2rem;
      }
  }
`;