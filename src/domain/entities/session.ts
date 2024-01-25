export class Session {
  id?: number;
  userId: string;
  token: string;
  expires: Date;
  userAgent: string | undefined;

  constructor(props: Session) {
    this.id = props.id;
    this.userId = props.userId;
    this.token = props.token;
    this.expires = props.expires;
    this.userAgent = props.userAgent;
  }
}
