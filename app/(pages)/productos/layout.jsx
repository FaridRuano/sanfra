import ProdNav from "@components/products/ProdNav";

export default function Layout({ children }) {
    return (
      <>
        <ProdNav/>
        <main>{children}</main>
      </>
    )
  }