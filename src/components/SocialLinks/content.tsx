import { Github } from "@styled-icons/boxicons-logos/Github"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"

const Icons = {
  Github,
  Linkedin
}

const handle = "Lucas-Dalamarta"

export const links = [
  {
    label: "Github",
    url: `https://github.com/${handle}`,
    icon: Icons.Github
  },
  {
    label: "Linkedin",
    url: `https://www.linkedin.com/in/${handle}`,
    icon: Icons.Linkedin
  }
]