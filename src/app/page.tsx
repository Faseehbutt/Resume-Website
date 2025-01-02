"use client"
import Image from "next/image"
import Link from "next/link"
export default function Homepage(){
  return (
    <div>
    <div className="body">
      <Image className="prgrmr-img"
                src="/programmer.png"
                alt="Description of image"
                width={500}
                height={500}
                quality={100}
            />
      <div className="bodytext">
        <div>
    <h1><span>Hi,</span> My name is Mohammad Faseeh,</h1>
    <p>I am a resume builder</p>
    <Link href="/resume-generator">
    <button>Lets Go!</button>
    </Link>
    </div>
    </div>
</div>
</div>
  )
}