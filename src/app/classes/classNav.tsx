export const ClassNav = () =>{
    return(
        <section className="flex lg:flex-row flex-col gap-[10px] lg:justify-between justify-center items-center ">
        <div>
          <h3 className="font-[600] text-[20px]">All your learning materials in one place</h3>
        </div>
        <div className="w-full md:w-auto flex md:items-center md:justify-center gap-[10px] border-1 border-gray-300 p-[16px] rounded-[8px] 
                grid grid-cols-2 md:flex ">
          <div className="hidden lg:block">
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H19.4C19.9601 1 20.2401 1 20.454 1.10899C20.6422 1.20487 20.7951 1.35785 20.891 1.54601C21 1.75992 21 2.03995 21 2.6V3.26939C21 3.53819 21 3.67259 20.9672 3.79756C20.938 3.90831 20.8901 4.01323 20.8255 4.10776C20.7526 4.21443 20.651 4.30245 20.4479 4.4785L14.0521 10.0215C13.849 10.1975 13.7474 10.2856 13.6745 10.3922C13.6099 10.4868 13.562 10.5917 13.5328 10.7024C13.5 10.8274 13.5 10.9618 13.5 11.2306V16.4584C13.5 16.6539 13.5 16.7517 13.4685 16.8363C13.4406 16.911 13.3953 16.9779 13.3363 17.0315C13.2695 17.0922 13.1787 17.1285 12.9971 17.2012L9.59711 18.5612C9.22957 18.7082 9.0458 18.7817 8.89827 18.751C8.76927 18.7242 8.65605 18.6476 8.58325 18.5377C8.5 18.4122 8.5 18.2142 8.5 17.8184V11.2306C8.5 10.9618 8.5 10.8274 8.46715 10.7024C8.43805 10.5917 8.39014 10.4868 8.32551 10.3922C8.25258 10.2856 8.15102 10.1975 7.94789 10.0215L1.55211 4.4785C1.34898 4.30245 1.24742 4.21443 1.17449 4.10776C1.10986 4.01323 1.06195 3.90831 1.03285 3.79756C1 3.67259 1 3.53819 1 3.26939V2.6Z" stroke="#1B1B1B" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <select className="flex flex-1  items-center justify-between px-[8px] py-[4px] border-1 border-gray-400 rounded-[4px] w-full md:w-[132px] ">
          <option>class</option>
              <option>KS1</option>
              <option>KS2</option>
            </select>
           
            <select className="flex flex-1  items-center justify-between px-[8px] py-[4px] border-1 border-gray-400 rounded-[4px] w-full md:w-[132px] ">
              <option>Subjects</option>
            </select>
           
            <select className="flex flex-1  items-center justify-between px-[8px] py-[4px] border-1 border-gray-400 rounded-[4px] w-full md:w-[132px] ">
              <option>Terms</option>
            </select>
          <div className="flex items-center justify-between px-[8px] py-[4px] bg-orange-500 text-white rounded-[8px] w-full md:w-[101px]">
            <button>Search</button>
            <span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 19L15.15 14.65M17.5 9C17.5 13.4183 13.9183 17 9.5 17C5.08172 17 1.5 13.4183 1.5 9C1.5 4.58172 5.08172 1 9.5 1C13.9183 1 17.5 4.58172 17.5 9Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </div>

        </div>
      </section>

    )
}