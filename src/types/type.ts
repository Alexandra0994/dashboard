export type WorkItem = {
  id: string
  originator: {
    initials: string
    name: string
  }
  client: {
    name: string
    line: string
  }
  type: string
  status: "New" | "Pending Review" | "Completed"
  created: string
}
