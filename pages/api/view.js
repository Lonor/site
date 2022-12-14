import { readKey, writeKeyValue } from "../../lib/redis";

// edge functions enable:
// export const config = {
//   runtime: "experimental-edge",
// };

export default async function view(req, res) {
  const page = req.query.page ? req.query.page : "/";
  const currentPageView = await viewPage(page);
  res.json(currentPageView);
}

const viewPage = async page => {
  return await addPageView(page);
};

const addPageView = async page => {
  const pageKey = "view:" + page;
  const currentPageView = await getPageViewCount(pageKey);
  const view = currentPageView + 1;
  console.log(`page: ${page} count: ${view}`);
  // increment only in production
  await writeKeyValue(pageKey, view);
  return {
    pageKey,
    view: currentPageView,
  };
};

const getPageViewCount = async page => {
  const readResult = await readKey(page);
  return Number(readResult); // direct value with Number type
};
