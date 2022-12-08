import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href='/blog'>
        <h4>Blog</h4>
      </Link>
      <Link href='/product'>
        <h4>Product</h4>
      </Link>
    </div>
  );
}

export default Home;
