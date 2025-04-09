export const RightSide = ()=>{
    return(
        <aside className="p-[16px] bg-[#F9D68A] lg:rounded-[4px] w-full md:w-1/3 flex-col flex gap-[24px]">
            <div className="bg-[#FFFBF9] p-[16px] flex gap-[10px] rounded-[4px]">
                <input type="text" placeholder="Search for course" className=" border-1 border-[#101828] px-[8px] py-[4px] rounded-[8px] w-full"/>
                <button className="bg-[#FF5900] py-[8px] px-[16px] md:w-auto lg:w-1/3 flex items-center justify-center gap-[2px] text-white rounded-[8px]">
                    <span className="md:hidden lg:block">Search</span>
                    <span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 21.4453L17.15 17.0953M19.5 11.4453C19.5 15.8636 15.9183 19.4453 11.5 19.4453C7.08172 19.4453 3.5 15.8636 3.5 11.4453C3.5 7.02703 7.08172 3.44531 11.5 3.44531C15.9183 3.44531 19.5 7.02703 19.5 11.4453Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </span>
                </button>
            </div>
            <div className="hidden text-[#0F0F0F] bg-[#FFFFFF] p-[16px] rounded-[4px] md:flex flex-col gap-[12px]">
                <h4 className="font-[600] text-[20px]">Medcine And Surgery</h4>
                <p className="text-[12px]">Minimum of Credit score in the following Subjects</p>
                <div>
                    <p className="font-[500] text-[18px] bg-[#F6F6F6]">O’Level Requirements</p>
                    <ul className="list-disc p-[12px] flex flex-col gap-[12px]">
                        <li>Mathematics</li>
                        <li>English Language</li>
                        <li>Biology</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                    </ul>
                </div>
                <div>
                    <p className="font-[500] text-[18px] bg-[#F6F6F6]">Jamb Requirements</p>
                    <ul className="list-disc p-[12px] flex flex-col gap-[12px]">
                        <li>Mathematics</li>
                        <li>English Language</li>
                        <li>Biology</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                    </ul>
                </div>
                <div>
                    <p className="font-[500] text-[18px] bg-[#F6F6F6]">Post UTME Requirements</p>
                    <ul className="list-disc p-[12px] flex flex-col gap-[12px]">
                        <li>Mathematics</li>
                        <li>English Language</li>
                        <li>Biology</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                    </ul>
                </div>
            </div>

        </aside>
    )
}