import ProdNav from "@public/components/products/ProdNav";

export default function Layout({ children }) {
    return (
      <>
        <ProdNav/>
        <main>{children}</main>
      </>
    )
  }