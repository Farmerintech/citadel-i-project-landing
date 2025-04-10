
import Header from '@/app/navbar'
import Footer from '@/app/footer'

export default async function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

 

  return (
    <div className="w-full   min-h-[100dvh]">
    <Header/>
      {children}
    <Footer />
    </div>
  );
}
