import Image from "next/image";
import Link from "next/link";
import TopBar from "./topbar";

export default function Layout({ children }) {
  return (
    <div>
      <TopBar />
    </div>
  );
}
