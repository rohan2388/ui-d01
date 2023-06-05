import Image from "next/image";
export default function Profile() {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/profile.png"
        alt="Profile Picture"
        width={55}
        height={55}
        className="rounded-[17px]"
      />
      <div className="flex flex-col">
        <h2 className="text-primary font-bold text-md">Ildiko Gaspar</h2>
        <p className="text-base-content -mt-1">@igaspar</p>
      </div>
    </div>
  );
}
