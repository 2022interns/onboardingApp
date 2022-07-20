import {Mentor} from "./Mentor";
import {NewJoiner} from "./NewJoiner";

export class Event {
  _id?: number;
  Subject?: string;
  StartTime?: Date;
  EndTime?: Date;
  OwnerId?:number;
  Mentor?: Mentor;
  NewJoiner?:NewJoiner;
}
