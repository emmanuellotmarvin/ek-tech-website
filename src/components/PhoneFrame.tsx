import Image, { StaticImageData } from 'next/image'

type PhoneFrameProps = {
  // Screenshot shown on the phone screen
  image: StaticImageData
  // Size of the phone, e.g. "h-175 w-85". Everything inside scales with this width
  className: string
  // Rendered width hint for next/image, e.g. "320px"
  sizes: string
  // Colors of the status bar, so it blends with the top of the screenshot
  statusBarClassName?: string
}

// A phone (metal body, black bezel, camera island, side buttons, status bar) with a screenshot on its screen.
// Sizes inside use container units (cqw), so the frame keeps its proportions at any width.
const PhoneFrame = ({ image, className, sizes, statusBarClassName = 'bg-white text-zinc-900' }: PhoneFrameProps) => {
  return (
    <div className={`@container ${className}`}>
      <div className="relative h-full w-full rounded-[17cqw] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-700 p-[0.9cqw]">
        {/* Side buttons */}
        <span className="absolute top-[20%] -left-[0.9cqw] h-[4.5%] w-[1.1cqw] rounded-l-[1cqw] bg-zinc-700"></span>
        <span className="absolute top-[28%] -left-[0.9cqw] h-[8%] w-[1.1cqw] rounded-l-[1cqw] bg-zinc-700"></span>
        <span className="absolute top-[38%] -left-[0.9cqw] h-[8%] w-[1.1cqw] rounded-l-[1cqw] bg-zinc-700"></span>
        <span className="absolute top-[30%] -right-[0.9cqw] h-[12%] w-[1.1cqw] rounded-r-[1cqw] bg-zinc-700"></span>

        {/* Bezel */}
        <div className="h-full w-full rounded-[16.1cqw] bg-black p-[2.8cqw]">
          {/* Screen */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[13.4cqw] bg-white">
            <div className={`relative flex h-[12cqw] shrink-0 items-center justify-between px-[8cqw] pt-[1cqw] text-[3.7cqw] leading-none font-semibold ${statusBarClassName}`}>
              <span>9:41</span>
              <span className="absolute top-[2.6cqw] left-1/2 h-[7.4cqw] w-[26cqw] -translate-x-1/2 rounded-full bg-black"></span>
              <span className="flex items-end gap-[1.6cqw]">
                <span className="flex items-end gap-[0.7cqw]">
                  <span className="h-[1.6cqw] w-[0.9cqw] rounded-[0.3cqw] bg-current"></span>
                  <span className="h-[2.3cqw] w-[0.9cqw] rounded-[0.3cqw] bg-current"></span>
                  <span className="h-[3cqw] w-[0.9cqw] rounded-[0.3cqw] bg-current"></span>
                </span>
                <span className="flex h-[3.1cqw] w-[6.4cqw] items-center rounded-[0.9cqw] border-[0.35cqw] border-current/50 p-[0.35cqw]">
                  <span className="h-full w-3/4 rounded-[0.4cqw] bg-current"></span>
                </span>
              </span>
            </div>

            <Image src={image} sizes={sizes} alt="" className="min-h-0 w-full flex-1 object-cover object-top" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneFrame
