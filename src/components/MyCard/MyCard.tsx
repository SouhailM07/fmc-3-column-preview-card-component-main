import "./mycard.css";

interface MyCard_type {
  img: string;
  color: string;
  title: string;
  txt: string;
}

export default function MyCard({ img, color, title, txt }: MyCard_type) {
  return (
    <>
      <section
        className={`bg-${color} max-w-[14rem] text-white px-[2rem] space-y-[3rem] py-[2rem] `}
      >
        <div className="space-y-[1rem]">
          <img src={img} alt="logo" />
          <h1 className="w700 text-[2rem] font-bold">{title}</h1>
          <p className="text-[15px] w400 ">{txt}</p>
        </div>
        <button
          className={`text-${color} duration-300 transition-all hover:bg-transparent border-2 border-white hover:text-white bg-white  px-[1.4rem] font-medium text-[15px] rounded-full py-[0.5rem]`}
        >
          Learn More
        </button>
      </section>
    </>
  );
}
