import Image from "next/image";
import Success from "./component/Success";
import Banner from "./component/Banner";
import Feature from "./component/Feature";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Success></Success>
    </div>
  );
}
