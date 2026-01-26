
import Header from '@/app/navbar'
import Footer from '@/app/footer'
import AuthHydration from './hydrate';

export default async function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

 

  return (
    <div className="w-full   min-h-[100dvh]">
    <Header/>
    <AuthHydration />

      {children}
    <Footer />
    </div>
  );
}
