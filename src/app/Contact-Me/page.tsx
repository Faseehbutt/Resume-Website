import Link from "next/link"
import Image from "next/image"
export default function skills(){
    return(
        <div className="contact-us">
            <br />
            <h1>Contact Me</h1>
          <p className="intro">
      Thank you for visiting my page! If you have any questions, project ideas, or simply want to connect, feel free to reach out using the contact information below. I’m always open to new opportunities and collaborations.
    </p>
    
    <div className="contact-details">
      <p><strong>Email:</strong> notfaseebutt@gmail.com</p>
      <p><strong>Phone:</strong> +92 3271455079</p>
      <p><strong>Location:</strong> Sukkur (Currently in Karachi for a course)</p>
    </div>
    
    <p className="outro">
    I welcome you to connect with me professionally on GitHub and LinkedIn or stay updated on social media platforms like Facebook and Instagram. Each platform is a great way to follow my latest projects and engage in meaningful discussions. Looking forward to connecting!
    </p>
    <div className="logolinks">
    <Link className="logolink" href="https://www.instagram.com/m.faseehbutt/profilecard/?igsh=OG5yOTBrN2FiY2Y2" target="_blank">
    <Image className="SM-images"
                src="/instagram.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
    </Link>
    <Link className="logolink" href="https://www.facebook.com/profile.php?id=61554563963368" target="_blank">
    <Image className="SM-images"
                src="/faceboook.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
    </Link>
    <Link className="logolink" href="https://github.com/Faseehbutt" target="_blank">
    <Image className="SM-images"
                src="/github.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
    </Link>
    <Link className="logolink" href="https://www.linkedin.com/in/hypnotic-plays-7599782ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
    <Image className="SM-images"
                src="/linkedin.png"
                alt="Description of image"
                width={100}
                height={100}
                quality={100}
            />
    </Link>
    </div>
        </div>
        
    )
}