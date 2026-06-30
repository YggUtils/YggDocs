import Image from "next/image";

export function DocsPreview() {
  return (
    <div className="relative h-full min-h-[520px] overflow-hidden">

      <Image
        src="/preview.png"
        alt="YggUtils Documentation Preview"
        fill
        priority
        className="
          object-cover
          object-left-top
          transition-transform
          duration-500
          hover:scale-[1.00]
        "
      />

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-48
          bg-gradient-to-r
          from-fd-background
          via-fd-background/70
          to-transparent
          pointer-events-none
        "
      />

    </div>
  );
}