export type Project = {
    label: string
    title: string
    url: string
    image: string
    icon: string
    category: "client" | "side"
  }

  export type Experience = {
    time: string
    title: string
    url?: string
    description: string
    roles: { name: string; duration: string }[]
    coreTech: string[]
    relatedTech: string[]
  }