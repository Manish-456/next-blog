import Image from "next/image";


export default function MyProfilePic() {
  return (
    <section className="w-full 
    ">
      <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src={`https://avatars.githubusercontent.com/u/111108242?v=4`}
        width={200}
        height={200}
        priority={true}
        alt="Manish Tamang"
      />
    </section>
  );
}
