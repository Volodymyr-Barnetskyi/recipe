export type ItemObject = {
  id:string,
  title: string,
  description: string,
  ingredients: string[]
}
export type Query = {
  full: ItemObject[];
}
