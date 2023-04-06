import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const Pagination = ({ total, pageCount }: any, page: [Number]) => {
  const router = useRouter();
  let [num, setNum] = useState(1);

  let [cur, setCur] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ];

  function Next() {
    num > 1 && setNum(++num);
    setCur((pre) => pre + 1);
    router.push(`/?limit=4&page${cur + 1}`);
  }

  function Back() {
    num > 1 && setNum(--num);
    setCur((pre) => pre - 1);
    router.push(`/?limit=4&page=${cur - 1}`);
    num > 1 && setNum(--num);
  }

  return (
    <div className="flex bg-white rounded-lg">
      <button
        onClick={Back}
        className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCur(pg.page)}
          className={`h-12 border-2 border-r-0 border-indigo-600 w-12 ${
            cur === pg.page && "bg-indigo-600 text-white"
          }`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={Next}
        className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
    // <div className="flex rounded-lg font-semibold">
    //   <button
    //     onClick={Back}
    //     className="h-12 border-2 border-r-0 border-indigo-600
    //             px-4 rounded-l-lg hover:bg-indigo-800 text-white hover:text-white"
    //   >
    //     <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
    //   </button>
    //   {pages.map((pg, i) => (
    //     <button
    //       key={i}
    //       onClick={() => setCur(pg.page)}
    //       className={`h-12 border-2 border-r-0 border-indigo-600
    //             w-12 text-white  ${
    //               cur === pg.page && "bg-indigo-600 text-white"
    //             }`}
    //     >
    //       {pg.page}
    //     </button>
    //   ))}
    //   <button
    //     onClick={Next}
    //     className="h-12 border-2  border-indigo-600
    //             px-4 rounded-r-lg hover:bg-indigo-800 hover:text-white text-white"
    //   >
    //     <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
    //   </button>
    // </div>
  );
};

export default Pagination;
