import { Svgs } from "../utils/svgs"

export const LeftSide = ()=>{
    return(
        <aside className=" bg-white flex flex-col gap-[53px] px-4 py-[16px] md:rounded-[4px] md:w-2/3 custom-scrollbar md:overflow-y-scroll md:h-[900px] lg:h-[1224px]">
            <div className="flex flex-col gap-[24px]">
                <h2 className="font-[700] md:text-[32px] text-[24px] text-[#0F0F0F]">Exam Preparation & Practice: Get Ready to Succeed!</h2>
                <p className="font-[400] text-[18px]">Preparing for exams can be stressful, but with the right resources, success is within reach! Our Exam Preparation & Practice section is designed to help students excel in their school exams and major exams like SAT, TOEFL, IELTS, IGCSE, JAMB, WAEC.</p>
            </div>
            <div className="bg-[#FEF6E6] p-[16px] rounded-[16px] flex flex-col gap-[24px]">
                <h3 className="text-[24px] font-[600] flex gap-[4px] items-center">
                    <span>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="20" height="20" fill="#FF5900"/>
                        </svg>

                    </span>
                    How it works
                </h3>
                <ul className="flex flex-col gap-[16px] list-disc p-[16px]">
                    <li>Start by searching for your class, subject, term and exam type  or select on the right side panel</li>
                    <li>Solve the practice questions and view your result</li>
                    <li>Practice WAEC and JAMB using CBT Simulatoion</li>
                </ul>
            </div>
            <div className=" p-[16px] rounded-[8px] flex flex-col gap-[32px] border-[#D0D5DD] border-1">
                <div className="grid grid-cols-2 gap-[40px]">
                    <div className="w-full flex flex-col gap-[12px]">
                        <p>Class Category</p>
                        <select className="w-full border-1 border-[#475467] rounded-[4px]">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-[12px]">
                        <p>Year</p>
                        <select className="w-full border-1 border-[#475467] rounded-[4px]">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-[12px]">
                        <p>Subject</p>
                        <select className="w-full border-1 border-[#475467] rounded-[4px]">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-[12px]">
                        <p>Term</p>
                        <select className="w-full border-1 border-[#475467] rounded-[4px]">
                            <option>All</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button className="px-[16px] py-[8px] gap-[8px] text-white items-center flex rounded-[8px] bg-[#FF5900]">
                        Search
                        <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 21L17.15 16.65M19.5 11C19.5 15.4183 15.9183 19 11.5 19C7.08172 19 3.5 15.4183 3.5 11C3.5 6.58172 7.08172 3 11.5 3C15.9183 3 19.5 6.58172 19.5 11Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className="gap-[24px] flex flex-col">
                <div className="bg-[#FFEEE6] flex flex-col gap-[32px] p-[16px] rounded-[4px]">
                    <h3 className="font-[500px] text-[24px]">Start free CBT Exam Simulation on WAEC and JAMB</h3>
                    <button className="w-1/2 px-[32px] py-[16px] border-1 border-[#FF5900] flex gap-[8px] rounded-[8px]">
                        Start Now
                        <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 17L11.5 12L6.5 7M13.5 17L18.5 12L13.5 7" stroke="#FF5900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="bg-[#FFEEE6] flex flex-col gap-[32px] p-[16px] rounded-[4px]">
                    <h3 className="font-[500px] text-[24px]">Watch Video Lessons on various subjects and Topics to be better prepared for your exams</h3>
                    <button className="w-1/2 px-[32px] py-[16px] border-1 border-[#FF5900] flex gap-[8px] rounded-[8px]">
                        Watch Now
                        <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 8.93137C22.5 8.32555 22.5 8.02265 22.3802 7.88238C22.2763 7.76068 22.1203 7.69609 21.9608 7.70865C21.7769 7.72312 21.5627 7.93731 21.1343 8.36569L17.5 12L21.1343 15.6343C21.5627 16.0627 21.7769 16.2769 21.9608 16.2914C22.1203 16.3039 22.2763 16.2393 22.3802 16.1176C22.5 15.9774 22.5 15.6744 22.5 15.0686V8.93137Z" stroke="#FF5900" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.5 9.8C2.5 8.11984 2.5 7.27976 2.82698 6.63803C3.1146 6.07354 3.57354 5.6146 4.13803 5.32698C4.77976 5 5.61984 5 7.3 5H12.7C14.3802 5 15.2202 5 15.862 5.32698C16.4265 5.6146 16.8854 6.07354 17.173 6.63803C17.5 7.27976 17.5 8.11984 17.5 9.8V14.2C17.5 15.8802 17.5 16.7202 17.173 17.362C16.8854 17.9265 16.4265 18.3854 15.862 18.673C15.2202 19 14.3802 19 12.7 19H7.3C5.61984 19 4.77976 19 4.13803 18.673C3.57354 18.3854 3.1146 17.9265 2.82698 17.362C2.5 16.7202 2.5 15.8802 2.5 14.2V9.8Z" stroke="#FF5900" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>
                    </button>
                </div>
            </div>
        </aside>
    )
}