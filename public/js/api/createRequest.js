/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => {
  try {
      let xhr = new XMLHttpRequest();
      let formData = new FormData();
      xhr.withCredentials = true;

      xhr.addEventListener('onload', function () {

      })
    
  } catch (e) {

  }
};




// var xhr = new XMLHttpRequest();
// xhr.open("GET", "/bar/foo.txt", true);
// xhr.onload = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText);
//     } else {
//       console.error(xhr.statusText);
//     }
//   }
// };
// xhr.onerror = function (e) {
//   console.error(xhr.statusText);
// };
// xhr.send(null); 








