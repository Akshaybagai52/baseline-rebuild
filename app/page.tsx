import Banner from "@/Components/Banner/Banner";
import Nav from "@/Components/Navbar/Nav";
import Ourservice from "@/Components/ourservice/ourservice";
import OurProcess from "@/Components/OurProcess/OurProcess";
export default function Home() {
  return (
    <>
      <Nav />
      <Banner />  
      <Ourservice />
      <OurProcess />
    </>
  );
}
