export interface ArtcileModel  {
  id: string,
  title: string,
  short: string,
  author: string,
  content: any,
  startDate: string,
  updateDate?: string,
  tags?: Array<string>
}