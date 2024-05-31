export type RatingItem = {
  record: number,
  user: {
    id: string,
    profile: {
      id: string,
      firstName: string,
      lastName: string,
      platform: string,
      photoUrl: string
    }
  }
};
