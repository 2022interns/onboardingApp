import {meeting} from "./meeting";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";

export class meetingTimeSuggestions {
  Mentors?: string;
  Mentor_email?: string;
  New_joiner?: string;
  NewJoiner_email?: string;
  meetings?: meeting[];
  Topic?: string;
  Selected_Time?: MicrosoftGraph.DateTimeTimeZone;
}
