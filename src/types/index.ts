export interface Section {
  id: string
  type: string
}

export interface SectionProps extends Section {
  isActive: boolean
}