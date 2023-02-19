export default function timeleft(startDate) {
  const date1 = new Date(startDate * 1000);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  let h, m, s;
  h = Math.floor(diffTime / 1000 / 60 / 60);
  m = Math.floor((diffTime / 1000 / 60 / 60 - h) * 60);
  s = Math.floor(((diffTime / 1000 / 60 / 60 - h) * 60 - m) * 60);
  s < 10 ? (s = `0${s}`) : (s = `${s}`);
  m < 10 ? (m = `0${m}`) : (m = `${m}`);
  h < 10 ? (h = `0${h}`) : (h = `${h}`);
  return `${h}:${m}:${s}`;
}
