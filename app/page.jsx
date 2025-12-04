import Image from "next/image";
import Success from "./component/Success";
import Banner from "./component/Banner";
import Feature from "./component/Feature";
import Download from "./component/Download";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Download></Download>
      <Success></Success>
    </div>
  );
}
