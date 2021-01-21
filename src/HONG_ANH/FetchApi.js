export const FetchApi = async ({
  url,
  method = "GET",
  body = null,
  resType = "json",
}) => {
  const headers = { "Content-Type": "application/json" };
  const opts = {
    method,
    headers,
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  const res = await window.fetch(url, opts);
  const regex = /(2|3)[0-9]{2}/g;
  if (!regex.test(res.status)) {
    throw new Error(res.statusText);
  }
  if (resType === "json") {
    return res.json();
  }
  return res.text();
};
