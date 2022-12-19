// import { Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar({ colorMode }) {
    return (
        <div id='Home'>
            <div id={styles.nav}>
                <Link smooth to='#Home'>
                    <img className={styles.logo} src='https://i.pinimg.com/originals/ce/56/74/ce567497ebe5f99a1ce2232275554b5b.gif' alt="logo" />
                </Link>


                <div id={styles.nav1} >
                    {/* <h3 className={styles.nav1H}>
                        <Link smooth to='#Home'>
                            Home
                        </Link>
                    </h3> */}

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Home'>
                            About
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Projects'>
                            Projects
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Skills'>
                            Skills
                        </Link>
                    </h3>
                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Contact'>
                            Contact
                        </Link>
                    </h3>

                    <h3>
                        <a style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", wordSpacing: "-.4ch" }} id={styles.anchor} href="./Khalid_Shah_Resume.pdf" download="Khalid-Shah-Resume">Resume
                            &nbsp; <FaDownload />
                        </a>
                    </h3>
                </div>

                <div id={styles.nav2}>
                    <Menu>
                        <MenuButton

                            backgroundColor="#FEF5ED"
                            as={Button}
                            rightIcon={< HamburgerIcon />}
                        />
                        <MenuList
                            backgroundColor="#FEF5ED" >
                            <Link smooth to='#About'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' >
                                    About
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Projects'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' >
                                    Projects
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Skills'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' >
                                    Skills
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Contact'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' >
                                    Contact
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
