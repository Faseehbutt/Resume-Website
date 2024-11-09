"use client"
import Image from "next/image"
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
        
    <h1><span>Hi,</span> My name is Mohammad Faseeh,</h1>
    <p>I am a resume builder</p>
    <a href="/resume.pdf" download="My Resume"> 
    <button>Download Now</button>
    </a>
    </div>
</div>

</div>
  )
}