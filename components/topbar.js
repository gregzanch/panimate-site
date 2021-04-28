import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { DARK_RED } from "../lib/colors";
import Text from "./text";
import Link from "next/link";

export default function TopBar() {
  return (
    <>
      <Navbar bg="light" variant="dark" className="justify-content-between">
        <Nav>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <Text color={DARK_RED}>Panimate</Text>
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Link href="/">Panimate</Link>
          <Link href="/support">Support</Link>
          <Link href="/download">Download</Link>
        </Nav>
      </Navbar>
    </>
  );
}
