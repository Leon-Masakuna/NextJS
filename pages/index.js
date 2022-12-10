import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Place your order");
    router.push("/product");
  };
  return (
    <div>
      <h1>Hello World</h1>
      <Link href='/blog'>
        <h4>Blog</h4>
      </Link>
      <Link href='/product'>
        <h4>Product</h4>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}

export default Home;
