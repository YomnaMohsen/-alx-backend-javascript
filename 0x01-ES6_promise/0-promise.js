export default function getResponseFromAPI() {
  const p = new Promise(((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('success');
    } else {
      reject('failed');
    }
  }));
  return p;
}
