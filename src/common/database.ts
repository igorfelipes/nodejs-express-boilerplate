export const createWhereObject = <T>(info: any) => {

  const whereObject: any = {
    // deleted_at: null,
  };
  Object.entries(info).forEach(([key, value]) => {
    if (key !== "page" && key !== "limit") whereObject[key] = { in: value };
  });
  return whereObject;
};

export const createQueryPeriod = (period?: "today" | "lastWeek" | "lastMonth") => {
  const currentDate = new Date();
  if (period === "today") {
    let startDate = new Date(currentDate);
    startDate.setHours(0, 0, 0, 0);
    return { createdAt: { gte: startDate } }
  }
  if (period === "lastWeek") {
    let startDate = new Date(currentDate)
    startDate.setDate(currentDate.getDate() - 7)
    return { createdAt: { gte: startDate } }
  }
  if (period === "lastMonth") {
    let startDate = new Date(currentDate)
    startDate.setDate(currentDate.getDate() - 30)
    return { createdAt: { gte: startDate } }
  }
  return {}
}
