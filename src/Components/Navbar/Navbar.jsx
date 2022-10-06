// import { Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
    return (
        <div id='Home'>
            <div id={styles.nav}>
                <Link smooth to='#Home'>
                    <img className={styles.logo} src='https://i.pinimg.com/originals/ce/56/74/ce567497ebe5f99a1ce2232275554b5b.gif' alt="logo" />
                </Link>
                <div id={styles.nav1}>
                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Home'>
                            Home
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Skills'>
                            Skills
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Projects'>
                            Projects
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#About'>
                            About
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Contact'>
                            Contact
                        </Link>
                    </h3>
                    <h3 style={{ display: "flex", alignItems: "center" }}>
                        <a id={styles.anchor} href="./Khalid.pdf" download="Khalid Shah's Resume">Resume</a>
                        &nbsp; <FaDownload />
                    </h3>
                </div>

                <div id={styles.nav2}>
                    <Menu>
                        <MenuButton
                            color='#243D25'
                            backgroundColor="#FEF5ED"
                            as={Button}
                            rightIcon={< HamburgerIcon />}
                        />
                        <MenuList color='#243D25'
                            backgroundColor="#FEF5ED" >
                            <Link smooth to='#Home'>
                                <MenuItem fontSize='25px' fontWeight='bold' color='#243D25'>
                                    Home
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Skills'>
                                <MenuItem fontSize='25px' fontWeight='bold' color='#243D25'>
                                    Skills
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Projects'>
                                <MenuItem fontSize='25px' fontWeight='bold' color='#243D25'>
                                    Projects
                                </MenuItem>
                            </Link>
                            <Link smooth to='#About'>
                                <MenuItem fontSize='25px' fontWeight='bold' color='#243D25'>
                                    About
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Contact'>
                                <MenuItem fontSize='25px' fontWeight='bold' color='#243D25'>
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
