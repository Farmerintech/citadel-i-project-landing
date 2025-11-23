"use client";

import { subjects } from '@/app/components/subjects';
import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import type {Metadata, ResolvingMetadata} from "next";
interface Section {
  heading: string;
  content: string;
}


export default function Page() {
  const [sections, setSections] = useState<Record<string, Section> | null>(null);
  const [rawContent, setRawContent] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();
  const searchParams = useSearchParams();
  const theClass = params.class as string;
  const subject = params.subject as string;
  const id = searchParams.get('id');
  const theSubject = subjects.find(sub => sub.url === subject)?.name;

  
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError("");
      setData(null);
      try {
        const res = await fetch(
          `https://api.citadel-i.com.ng/api/v1/note/get_note/${id}/${theSubject}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch class material");
        }

        const htmlContent = result.data?.content || '';
        setRawContent(htmlContent);
        setData(result.data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error connecting to server");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Parse TOC safely
  let TOC: string[] = [];
  if (data?.tableOfContent) {
    try {
      TOC = JSON.parse(data.tableOfContent);
    } catch (e) {
      console.warn("Invalid TOC format:", e);
    }
  }

  return (
    <section className="lg:px-[100px] md:px-[20px] w-full overflow-x-hidden py-[16px] px-[16px] bg-[#F3F3F3] flex flex-col md:flex-row gap-[24px] justify-between">
      <aside className="md:w-[300px] w-full md:h-[500px] h-auto py-[24px] px-[12px] flex flex-col gap-[16px] bg-white">
        <p className="p-[8px] gap-[10px] bg-[#FBE3B0]">Lesson Contents</p>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : TOC.length > 0 ? (
            TOC.map((content: string, index: number) => (
              <p key={index}>{content}</p>
            ))
          ) : (
            <p>No Table of Content available</p>
          )}
        </div>
      </aside>

      <main className="w-full p-[24px] rounded-[2px] bg-white">
        {
          data && 
          <div>
            <p className='font-bold text-[18px]'>Subject: {data.subject}</p>
            <p className='font-bold text-[18px]'>Class: {data.class} / <span>{data.year}</span></p>
            <p className='font-bold text-[18px]'>Term: {data.term}</p>
            <p className='font-bold text-[18px]'>Topic: {data.topic}</p>
          </div>
        }
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: rawContent }}
            className="p-8"
          />
        )}

        <p className="mt-6 text-gray-500">{data?.term}</p>
      </main>
    </section>
  );
}
