export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else if (false) {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
