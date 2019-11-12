import { Tag } from "./tag";
export interface ArtcileModel  {
  id: string,
  title: string,
  shorter: string,
  author: string,
  content: any,
  createdDate: string,
  updatedDate?: string,
  tags?: Array<Tag>
}