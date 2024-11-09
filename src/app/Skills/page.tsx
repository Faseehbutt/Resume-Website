import Image from "next/image"
export default function skills(){   
    return(
        <div className="skills-page">
            <h1>My Skills</h1>
            <div className="borderofimg">
              <Image className="html-img"
                src="/html-5.png"
                alt="Description of image"
                width={100}
                height={10}
                quality={100}
            />          
                   <Image className="html-img"
                src="/css-3.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
                   <Image className="html-img"
                src="/typescript.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
                   <Image className="html-img"
                src="/node-js.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
                   <Image className="html-img"
                src="/react.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
                   <Image className="html-img"
                src="/nextjs.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
              <Image className="html-img"
                src="/vscode.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
              <Image className="html-img"
                src="/tailwind.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
            </div>
        </div>
    )
}