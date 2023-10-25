import Banner from "@/Components/Banner/Banner";
import Nav from "@/Components/Navbar/Nav";
import Ourservice from "@/Components/ourservice/ourservice";
export default function Home() {
  return (
    <>
      <Nav />
      <Banner /> {/* // I am put particles in this banner component  */}
      <Ourservice />
    </>
  );
}
