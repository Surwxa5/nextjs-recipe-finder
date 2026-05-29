
import Link from 'next/link'
import "./globals.css";
import Recipes from './recipes/page';

export const metadata = {
  title :"Recipe App",
  description:'find delicious recipes',
};
 
export default function RootLayout ({children}){
  return(
    <html lang="en">
    <body>
    <nav style={{padding:'16px', borderBottom:"1px solid #eee",display:'flex', gap:'16px'}}>
     <Link href="/">Home
     </Link>
     <Link href="/recipes">
    Recipes
     </Link>
    

    </nav>
    {children}
    </body>
    
    </html>
  )
}