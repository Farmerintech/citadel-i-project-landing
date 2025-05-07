
"use client"



// export default function page (){
//     const [text, setText] = useState<any>()
//     const fetchContent = async()=>{
//         const result = await mammoth.convertToHtml({ path:'..app/assets/adeyemo CHAPTER ONE.docx'});
//         setText(result?.value);
//         console.log(result.value)

//     }
//     fetchContent()
//     const params = useParams()
//     let theClass = params.class as string; //
//     let subject = params.subject as string
   
//     return(
//         <section className="lg:px-[100px] md:px-[50px] py-[16px] px-[16px] bg-[#F3F3F3] flex gap-[24px] justify-between">
//             <aside className="w-[297px] h-auto py-[24px] px-[12px] flex - flex-col gap-[16px] bg-white">
//                 <p className="p-[8px] gap-[10] bg-[#FBE3B0]">Lesson Contents</p>
//             </aside>
//             <main className="w-full p-[24px] rounded-[2px] bg-white">
//                 {
//                     text!=='' ? text :""
//                 }
//             </main>
//         </section>
//     )
// }

// 'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Page() {
  const [text, setText] = useState('');
  const params = useParams();
  const theClass = params.class as string;
  const subject = params.subject as string;

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch('./app/api/convert-doc');
      const data = await res.json();
      setText(data.html || '');
    };
    fetchContent();
  }, []);

  return (
    <section className="lg:px-[100px] md:px-[50px] py-[16px] px-[16px] bg-[#F3F3F3] flex gap-[24px] justify-between">
      <aside className="w-[297px] h-auto py-[24px] px-[12px] flex flex-col gap-[16px] bg-white">
        <p className="p-[8px] gap-[10px] bg-[#FBE3B0]">Lesson Contents</p>
      </aside>
      <main className="w-full p-[24px] rounded-[2px] bg-white">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </main>
    </section>
  );
}
