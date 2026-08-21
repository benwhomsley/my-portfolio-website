export type ProjectBase = {
  label: string
  title: string
  url: string
  image: string
  icon: string
}

export type SideProject = ProjectBase & {
  category: "side"
}

export type CaseStudyProject = ProjectBase & {
  category: "client"
  intro: string
  role: string
  impact: string[]
  tech: string[]
}

export type Project = SideProject | CaseStudyProject

export type Experience = {
  time: string
  title: string
  url?: string
  description: string
  roles: { name: string; duration: string }[]
  coreTech: string[]
  relatedTech: string[]
}
